package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataSourceId")
    public String dataSourceId;
    public FitnessUsersDataSourcesDeletePathParams withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersDataSourcesDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}