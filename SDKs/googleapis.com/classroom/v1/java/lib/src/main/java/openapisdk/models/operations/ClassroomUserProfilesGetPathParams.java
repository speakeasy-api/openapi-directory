package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ClassroomUserProfilesGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}