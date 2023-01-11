package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ServiceProtocol {
    @JsonProperty("label")
    public ServiceProtocolLabelEnum label;
    public ServiceProtocol withLabel(ServiceProtocolLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public ServiceProtocolValueEnum value;
    public ServiceProtocol withValue(ServiceProtocolValueEnum value) {
        this.value = value;
        return this;
    }
}