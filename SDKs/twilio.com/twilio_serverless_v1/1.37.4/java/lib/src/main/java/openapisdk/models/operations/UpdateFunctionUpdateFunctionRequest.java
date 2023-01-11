package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionUpdateFunctionRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateFunctionUpdateFunctionRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}