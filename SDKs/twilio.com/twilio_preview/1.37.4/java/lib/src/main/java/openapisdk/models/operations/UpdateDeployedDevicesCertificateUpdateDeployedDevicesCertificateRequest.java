package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest {
    @SpeakeasyMetadata("form:name=DeviceSid")
    public String deviceSid;
    public UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest withDeviceSid(String deviceSid) {
        this.deviceSid = deviceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}