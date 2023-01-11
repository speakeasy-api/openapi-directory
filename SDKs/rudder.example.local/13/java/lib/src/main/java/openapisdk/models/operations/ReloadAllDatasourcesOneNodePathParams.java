package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReloadAllDatasourcesOneNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ReloadAllDatasourcesOneNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}