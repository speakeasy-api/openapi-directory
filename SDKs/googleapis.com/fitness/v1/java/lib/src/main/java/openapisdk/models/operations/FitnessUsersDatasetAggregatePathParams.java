package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDatasetAggregatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersDatasetAggregatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}