package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest {
    @SpeakeasyMetadata("form:name=DefaultDeploymentSid")
    public String defaultDeploymentSid;
    public UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest withDefaultDeploymentSid(String defaultDeploymentSid) {
        this.defaultDeploymentSid = defaultDeploymentSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}