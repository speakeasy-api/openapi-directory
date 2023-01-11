package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest {
    @SpeakeasyMetadata("form:name=DeviceSid")
    public String deviceSid;
    public CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest withDeviceSid(String deviceSid) {
        this.deviceSid = deviceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}