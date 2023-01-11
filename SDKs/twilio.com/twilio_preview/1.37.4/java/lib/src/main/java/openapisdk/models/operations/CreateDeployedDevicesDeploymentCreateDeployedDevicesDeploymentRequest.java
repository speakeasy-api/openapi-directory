package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=SyncServiceSid")
    public String syncServiceSid;
    public CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest withSyncServiceSid(String syncServiceSid) {
        this.syncServiceSid = syncServiceSid;
        return this;
    }
}