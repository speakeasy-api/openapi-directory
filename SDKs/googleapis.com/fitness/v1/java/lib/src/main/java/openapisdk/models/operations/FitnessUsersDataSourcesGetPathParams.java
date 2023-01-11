package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataSourceId")
    public String dataSourceId;
    public FitnessUsersDataSourcesGetPathParams withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersDataSourcesGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}