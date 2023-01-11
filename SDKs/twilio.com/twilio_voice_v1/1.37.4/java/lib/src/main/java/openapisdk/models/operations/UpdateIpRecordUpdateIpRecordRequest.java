package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIpRecordUpdateIpRecordRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateIpRecordUpdateIpRecordRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}