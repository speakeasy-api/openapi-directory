package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodeInheritedPropertiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public NodeInheritedPropertiesPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}