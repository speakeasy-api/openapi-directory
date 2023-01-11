package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest {
    @SpeakeasyMetadata("form:name=DeploymentSid")
    public String deploymentSid;
    public CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest withDeploymentSid(String deploymentSid) {
        this.deploymentSid = deploymentSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}