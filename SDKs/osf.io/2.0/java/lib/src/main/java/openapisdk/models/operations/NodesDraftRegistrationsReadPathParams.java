package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesDraftRegistrationsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=draft_id")
    public String draftId;
    public NodesDraftRegistrationsReadPathParams withDraftId(String draftId) {
        this.draftId = draftId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesDraftRegistrationsReadPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}