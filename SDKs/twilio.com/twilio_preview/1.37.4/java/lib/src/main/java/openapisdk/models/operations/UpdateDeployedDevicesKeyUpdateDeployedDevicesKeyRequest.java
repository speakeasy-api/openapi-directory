package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest {
    @SpeakeasyMetadata("form:name=DeviceSid")
    public String deviceSid;
    public UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest withDeviceSid(String deviceSid) {
        this.deviceSid = deviceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}