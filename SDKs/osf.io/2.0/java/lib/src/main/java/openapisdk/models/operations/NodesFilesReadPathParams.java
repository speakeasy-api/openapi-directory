package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesFilesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesFilesReadPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public NodesFilesReadPathParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public NodesFilesReadPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}