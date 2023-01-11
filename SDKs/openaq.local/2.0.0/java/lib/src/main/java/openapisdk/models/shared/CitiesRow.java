package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CitiesRow {
    @JsonProperty("city")
    public String city;
    public CitiesRow withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public CitiesRow withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public CitiesRow withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("firstUpdated")
    public OffsetDateTime firstUpdated;
    public CitiesRow withFirstUpdated(OffsetDateTime firstUpdated) {
        this.firstUpdated = firstUpdated;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public CitiesRow withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("locations")
    public Long locations;
    public CitiesRow withLocations(Long locations) {
        this.locations = locations;
        return this;
    }
    @JsonProperty("parameters")
    public String[] parameters;
    public CitiesRow withParameters(String[] parameters) {
        this.parameters = parameters;
        return this;
    }
}