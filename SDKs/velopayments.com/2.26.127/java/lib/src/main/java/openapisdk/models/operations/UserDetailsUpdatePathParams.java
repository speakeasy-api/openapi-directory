package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserDetailsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserDetailsUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}