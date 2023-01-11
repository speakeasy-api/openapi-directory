package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChecksUpdateRequestBodyActions {
    @JsonProperty("description")
    public String description;
    public ChecksUpdateRequestBodyActions withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public ChecksUpdateRequestBodyActions withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public ChecksUpdateRequestBodyActions withLabel(String label) {
        this.label = label;
        return this;
    }
}