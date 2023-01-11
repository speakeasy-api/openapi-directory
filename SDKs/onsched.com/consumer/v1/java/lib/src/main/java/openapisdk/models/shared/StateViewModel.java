package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateViewModel
 * View model for state object
**/
public class StateViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public StateViewModel withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public StateViewModel withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryName")
    public String countryName;
    public StateViewModel withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StateViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public StateViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
}