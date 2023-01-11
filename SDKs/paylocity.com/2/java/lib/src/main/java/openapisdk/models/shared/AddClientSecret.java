package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddClientSecret
 * The Add Client Secret Request Model
**/
public class AddClientSecret {
    @JsonProperty("code")
    public String code;
    public AddClientSecret withCode(String code) {
        this.code = code;
        return this;
    }
}