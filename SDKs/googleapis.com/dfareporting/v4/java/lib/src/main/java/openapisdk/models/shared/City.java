package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * City
 * Contains information about a city that can be targeted by ads.
**/
public class City {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public City withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryDartId")
    public String countryDartId;
    public City withCountryDartId(String countryDartId) {
        this.countryDartId = countryDartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dartId")
    public String dartId;
    public City withDartId(String dartId) {
        this.dartId = dartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public City withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metroCode")
    public String metroCode;
    public City withMetroCode(String metroCode) {
        this.metroCode = metroCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metroDmaId")
    public String metroDmaId;
    public City withMetroDmaId(String metroDmaId) {
        this.metroDmaId = metroDmaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public City withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public City withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionDartId")
    public String regionDartId;
    public City withRegionDartId(String regionDartId) {
        this.regionDartId = regionDartId;
        return this;
    }
}