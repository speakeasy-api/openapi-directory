package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersAddonsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public UsersAddonsReadPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersAddonsReadPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}