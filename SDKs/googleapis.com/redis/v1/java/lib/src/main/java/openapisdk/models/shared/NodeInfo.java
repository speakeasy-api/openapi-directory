package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeInfo
 * Node specific properties.
**/
public class NodeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NodeInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public NodeInfo withZone(String zone) {
        this.zone = zone;
        return this;
    }
}