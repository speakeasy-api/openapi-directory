package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodePool
 * indicating a list of workers of same type
**/
public class NodePool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NodePool withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public NodePool withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repairAction")
    public NodePoolRepairActionEnum repairAction;
    public NodePool withRepairAction(NodePoolRepairActionEnum repairAction) {
        this.repairAction = repairAction;
        return this;
    }
}