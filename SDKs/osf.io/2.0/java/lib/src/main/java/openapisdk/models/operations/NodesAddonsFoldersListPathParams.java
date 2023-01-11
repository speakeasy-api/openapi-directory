package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesAddonsFoldersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesAddonsFoldersListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public NodesAddonsFoldersListPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}