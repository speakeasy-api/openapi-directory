package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest {
    @SpeakeasyMetadata("form:name=DeploymentSid")
    public String deploymentSid;
    public UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest withDeploymentSid(String deploymentSid) {
        this.deploymentSid = deploymentSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
}