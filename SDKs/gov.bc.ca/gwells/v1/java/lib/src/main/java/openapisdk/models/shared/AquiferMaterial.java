package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AquiferMaterial {
    @JsonProperty("code")
    public String code;
    public AquiferMaterial withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public AquiferMaterial withDescription(String description) {
        this.description = description;
        return this;
    }
}