package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasourceId")
    public String datasourceId;
    public GetDataSourcePathParams withDatasourceId(String datasourceId) {
        this.datasourceId = datasourceId;
        return this;
    }
}