package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ValidationResult {
    @JsonProperty("openapi")
    public String openapi;
    public ValidationResult withOpenapi(String openapi) {
        this.openapi = openapi;
        return this;
    }
}