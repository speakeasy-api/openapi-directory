package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public Long cable;
    public NestedInterface withCable(Long cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public NestedInterfaceConnectionStatus connectionStatus;
    public NestedInterface withConnectionStatus(NestedInterfaceConnectionStatus connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public NestedDevice device;
    public NestedInterface withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedInterface withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedInterface withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedInterface withUrl(String url) {
        this.url = url;
        return this;
    }
}