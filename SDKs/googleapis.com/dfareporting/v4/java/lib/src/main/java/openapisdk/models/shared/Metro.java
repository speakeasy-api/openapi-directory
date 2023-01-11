package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metro
 * Contains information about a metro region that can be targeted by ads.
**/
public class Metro {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public Metro withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryDartId")
    public String countryDartId;
    public Metro withCountryDartId(String countryDartId) {
        this.countryDartId = countryDartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dartId")
    public String dartId;
    public Metro withDartId(String dartId) {
        this.dartId = dartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dmaId")
    public String dmaId;
    public Metro withDmaId(String dmaId) {
        this.dmaId = dmaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Metro withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metroCode")
    public String metroCode;
    public Metro withMetroCode(String metroCode) {
        this.metroCode = metroCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Metro withName(String name) {
        this.name = name;
        return this;
    }
}