package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReloadOneDatasourceAllNodesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasourceId")
    public String datasourceId;
    public ReloadOneDatasourceAllNodesPathParams withDatasourceId(String datasourceId) {
        this.datasourceId = datasourceId;
        return this;
    }
}