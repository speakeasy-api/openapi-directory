package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Region
 * Contains information about a region that can be targeted by ads.
**/
public class Region {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public Region withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryDartId")
    public String countryDartId;
    public Region withCountryDartId(String countryDartId) {
        this.countryDartId = countryDartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dartId")
    public String dartId;
    public Region withDartId(String dartId) {
        this.dartId = dartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Region withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Region withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public Region withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}