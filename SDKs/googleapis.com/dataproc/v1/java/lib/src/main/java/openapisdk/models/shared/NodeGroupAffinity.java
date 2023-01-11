package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeGroupAffinity
 * Node Group Affinity for clusters using sole-tenant node groups.
**/
public class NodeGroupAffinity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeGroupUri")
    public String nodeGroupUri;
    public NodeGroupAffinity withNodeGroupUri(String nodeGroupUri) {
        this.nodeGroupUri = nodeGroupUri;
        return this;
    }
}