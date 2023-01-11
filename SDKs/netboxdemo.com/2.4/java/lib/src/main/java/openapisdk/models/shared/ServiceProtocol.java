package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ServiceProtocol {
    @JsonProperty("label")
    public String label;
    public ServiceProtocol withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public ServiceProtocol withValue(Long value) {
        this.value = value;
        return this;
    }
}