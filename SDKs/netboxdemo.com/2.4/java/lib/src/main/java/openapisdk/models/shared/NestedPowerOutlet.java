package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedPowerOutlet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public NestedDevice device;
    public NestedPowerOutlet withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedPowerOutlet withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_connected")
    public String isConnected;
    public NestedPowerOutlet withIsConnected(String isConnected) {
        this.isConnected = isConnected;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedPowerOutlet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedPowerOutlet withUrl(String url) {
        this.url = url;
        return this;
    }
}