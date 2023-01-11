package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataSourceId")
    public String dataSourceId;
    public FitnessUsersDataSourcesUpdatePathParams withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersDataSourcesUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}