package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesProvidersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesProvidersReadPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public NodesProvidersReadPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}