package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CountriesRow {
    @JsonProperty("cities")
    public Long cities;
    public CountriesRow withCities(Long cities) {
        this.cities = cities;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public CountriesRow withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public CountriesRow withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("firstUpdated")
    public OffsetDateTime firstUpdated;
    public CountriesRow withFirstUpdated(OffsetDateTime firstUpdated) {
        this.firstUpdated = firstUpdated;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public CountriesRow withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("locations")
    public Long locations;
    public CountriesRow withLocations(Long locations) {
        this.locations = locations;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CountriesRow withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parameters")
    public String[] parameters;
    public CountriesRow withParameters(String[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("sources")
    public Long sources;
    public CountriesRow withSources(Long sources) {
        this.sources = sources;
        return this;
    }
}