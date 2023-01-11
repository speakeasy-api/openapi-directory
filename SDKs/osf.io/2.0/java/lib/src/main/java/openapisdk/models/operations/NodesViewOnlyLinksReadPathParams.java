package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesViewOnlyLinksReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public NodesViewOnlyLinksReadPathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesViewOnlyLinksReadPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}