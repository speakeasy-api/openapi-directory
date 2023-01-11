package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersDataSourcesListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}