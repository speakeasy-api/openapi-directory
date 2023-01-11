package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CountryViewModel
 * View model for country objects
**/
public class CountryViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CountryViewModel withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CountryViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public CountryViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
}