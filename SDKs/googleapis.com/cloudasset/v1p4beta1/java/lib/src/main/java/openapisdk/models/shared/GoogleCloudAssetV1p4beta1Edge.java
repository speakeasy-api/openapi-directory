package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p4beta1Edge
 * A directional edge.
**/
public class GoogleCloudAssetV1p4beta1Edge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceNode")
    public String sourceNode;
    public GoogleCloudAssetV1p4beta1Edge withSourceNode(String sourceNode) {
        this.sourceNode = sourceNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNode")
    public String targetNode;
    public GoogleCloudAssetV1p4beta1Edge withTargetNode(String targetNode) {
        this.targetNode = targetNode;
        return this;
    }
}