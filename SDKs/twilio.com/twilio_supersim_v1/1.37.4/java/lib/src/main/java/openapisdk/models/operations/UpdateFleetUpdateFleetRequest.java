package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetUpdateFleetRequest {
    @SpeakeasyMetadata("form:name=DataLimit")
    public Long dataLimit;
    public UpdateFleetUpdateFleetRequest withDataLimit(Long dataLimit) {
        this.dataLimit = dataLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=IpCommandsMethod")
    public UpdateFleetUpdateFleetRequestIpCommandsMethodEnum ipCommandsMethod;
    public UpdateFleetUpdateFleetRequest withIpCommandsMethod(UpdateFleetUpdateFleetRequestIpCommandsMethodEnum ipCommandsMethod) {
        this.ipCommandsMethod = ipCommandsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=IpCommandsUrl")
    public String ipCommandsUrl;
    public UpdateFleetUpdateFleetRequest withIpCommandsUrl(String ipCommandsUrl) {
        this.ipCommandsUrl = ipCommandsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=NetworkAccessProfile")
    public String networkAccessProfile;
    public UpdateFleetUpdateFleetRequest withNetworkAccessProfile(String networkAccessProfile) {
        this.networkAccessProfile = networkAccessProfile;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsCommandsMethod")
    public UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum smsCommandsMethod;
    public UpdateFleetUpdateFleetRequest withSmsCommandsMethod(UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum smsCommandsMethod) {
        this.smsCommandsMethod = smsCommandsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsCommandsUrl")
    public String smsCommandsUrl;
    public UpdateFleetUpdateFleetRequest withSmsCommandsUrl(String smsCommandsUrl) {
        this.smsCommandsUrl = smsCommandsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateFleetUpdateFleetRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}