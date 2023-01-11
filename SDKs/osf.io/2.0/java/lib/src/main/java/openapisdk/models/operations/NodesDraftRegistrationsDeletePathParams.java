package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesDraftRegistrationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=draft_id")
    public String draftId;
    public NodesDraftRegistrationsDeletePathParams withDraftId(String draftId) {
        this.draftId = draftId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesDraftRegistrationsDeletePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}