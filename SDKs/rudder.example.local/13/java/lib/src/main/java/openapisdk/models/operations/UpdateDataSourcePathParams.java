package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasourceId")
    public String datasourceId;
    public UpdateDataSourcePathParams withDatasourceId(String datasourceId) {
        this.datasourceId = datasourceId;
        return this;
    }
}