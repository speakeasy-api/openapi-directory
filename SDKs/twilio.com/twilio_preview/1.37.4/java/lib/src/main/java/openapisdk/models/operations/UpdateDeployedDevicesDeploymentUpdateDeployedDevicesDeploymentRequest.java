package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=SyncServiceSid")
    public String syncServiceSid;
    public UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest withSyncServiceSid(String syncServiceSid) {
        this.syncServiceSid = syncServiceSid;
        return this;
    }
}