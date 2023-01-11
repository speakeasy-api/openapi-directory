package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWirelessRatePlanUpdateWirelessRatePlanRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateWirelessRatePlanUpdateWirelessRatePlanRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateWirelessRatePlanUpdateWirelessRatePlanRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}