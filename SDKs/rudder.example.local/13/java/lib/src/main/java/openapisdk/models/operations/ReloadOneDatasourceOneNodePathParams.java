package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReloadOneDatasourceOneNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasourceId")
    public String datasourceId;
    public ReloadOneDatasourceOneNodePathParams withDatasourceId(String datasourceId) {
        this.datasourceId = datasourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ReloadOneDatasourceOneNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}