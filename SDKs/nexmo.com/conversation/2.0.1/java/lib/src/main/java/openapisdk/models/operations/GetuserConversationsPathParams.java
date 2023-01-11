package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetuserConversationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public GetuserConversationsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}