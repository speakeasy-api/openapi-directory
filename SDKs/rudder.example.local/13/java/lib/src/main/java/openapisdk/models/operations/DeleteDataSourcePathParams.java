package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDataSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasourceId")
    public String datasourceId;
    public DeleteDataSourcePathParams withDatasourceId(String datasourceId) {
        this.datasourceId = datasourceId;
        return this;
    }
}