package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesNodeAddonUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesNodeAddonUpdatePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public NodesNodeAddonUpdatePathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}