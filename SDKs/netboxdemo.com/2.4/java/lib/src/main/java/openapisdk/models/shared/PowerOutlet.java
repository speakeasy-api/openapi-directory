package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PowerOutlet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_port")
    public String connectedPort;
    public PowerOutlet withConnectedPort(String connectedPort) {
        this.connectedPort = connectedPort;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public PowerOutlet withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerOutlet withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerOutlet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PowerOutlet withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}