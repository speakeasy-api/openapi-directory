package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesFilesListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public NodesFilesListPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}