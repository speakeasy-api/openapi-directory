package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostalCode
 * Contains information about a postal code that can be targeted by ads.
**/
public class PostalCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public PostalCode withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public PostalCode withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryDartId")
    public String countryDartId;
    public PostalCode withCountryDartId(String countryDartId) {
        this.countryDartId = countryDartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostalCode withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PostalCode withKind(String kind) {
        this.kind = kind;
        return this;
    }
}