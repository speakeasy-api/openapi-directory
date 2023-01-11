package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesDatasetsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataSourceId")
    public String dataSourceId;
    public FitnessUsersDataSourcesDatasetsGetPathParams withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public FitnessUsersDataSourcesDatasetsGetPathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersDataSourcesDatasetsGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}