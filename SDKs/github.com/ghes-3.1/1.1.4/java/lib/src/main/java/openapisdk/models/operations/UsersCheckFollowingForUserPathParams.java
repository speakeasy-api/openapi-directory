package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersCheckFollowingForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_user")
    public String targetUser;
    public UsersCheckFollowingForUserPathParams withTargetUser(String targetUser) {
        this.targetUser = targetUser;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersCheckFollowingForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}