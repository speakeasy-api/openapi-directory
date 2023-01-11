package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AquiferProductivity {
    @JsonProperty("code")
    public String code;
    public AquiferProductivity withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public AquiferProductivity withDescription(String description) {
        this.description = description;
        return this;
    }
}