package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersPreprintsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersPreprintsListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}