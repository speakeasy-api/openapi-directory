package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedConsoleServerPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public NestedDevice device;
    public NestedConsoleServerPort withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedConsoleServerPort withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_connected")
    public String isConnected;
    public NestedConsoleServerPort withIsConnected(String isConnected) {
        this.isConnected = isConnected;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedConsoleServerPort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedConsoleServerPort withUrl(String url) {
        this.url = url;
        return this;
    }
}