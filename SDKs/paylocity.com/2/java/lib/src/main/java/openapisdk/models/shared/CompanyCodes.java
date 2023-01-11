package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompanyCodes
 * The Company Codes model
**/
public class CompanyCodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CompanyCodes withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CompanyCodes withDescription(String description) {
        this.description = description;
        return this;
    }
}