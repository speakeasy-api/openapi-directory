package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AquiferSubtype {
    @JsonProperty("code")
    public String code;
    public AquiferSubtype withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public AquiferSubtype withDescription(String description) {
        this.description = description;
        return this;
    }
}