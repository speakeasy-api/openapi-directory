package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserUpdateUserRequest {
    @SpeakeasyMetadata("form:name=Avatar")
    public String avatar;
    public UpdateUserUpdateUserRequest withAvatar(String avatar) {
        this.avatar = avatar;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateUserUpdateUserRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IsAvailable")
    public Boolean isAvailable;
    public UpdateUserUpdateUserRequest withIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
        return this;
    }
    @SpeakeasyMetadata("form:name=State")
    public openapisdk.models.shared.UserEnumStateTypeEnum state;
    public UpdateUserUpdateUserRequest withState(openapisdk.models.shared.UserEnumStateTypeEnum state) {
        this.state = state;
        return this;
    }
}