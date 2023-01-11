package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public EndpointGetUsersProfilePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}