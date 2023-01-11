package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest {
    @SpeakeasyMetadata("form:name=CertificateData")
    public String certificateData;
    public CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest withCertificateData(String certificateData) {
        this.certificateData = certificateData;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeviceSid")
    public String deviceSid;
    public CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest withDeviceSid(String deviceSid) {
        this.deviceSid = deviceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}