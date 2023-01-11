package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNodeCompliancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public GetNodeCompliancePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}