package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesDatasetsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataSourceId")
    public String dataSourceId;
    public FitnessUsersDataSourcesDatasetsDeletePathParams withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public FitnessUsersDataSourcesDatasetsDeletePathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersDataSourcesDatasetsDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}