package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRatePlanUpdateRatePlanRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateRatePlanUpdateRatePlanRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateRatePlanUpdateRatePlanRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}