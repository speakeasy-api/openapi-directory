package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesCitationReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesCitationReadPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=style_id")
    public String styleId;
    public NodesCitationReadPathParams withStyleId(String styleId) {
        this.styleId = styleId;
        return this;
    }
}