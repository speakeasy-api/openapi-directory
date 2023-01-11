package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AquiferDemand {
    @JsonProperty("code")
    public String code;
    public AquiferDemand withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public AquiferDemand withDescription(String description) {
        this.description = description;
        return this;
    }
}