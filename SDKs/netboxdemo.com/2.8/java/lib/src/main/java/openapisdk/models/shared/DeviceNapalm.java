package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceNapalm {
    @JsonProperty("method")
    public java.util.Map<String, String> method;
    public DeviceNapalm withMethod(java.util.Map<String, String> method) {
        this.method = method;
        return this;
    }
}