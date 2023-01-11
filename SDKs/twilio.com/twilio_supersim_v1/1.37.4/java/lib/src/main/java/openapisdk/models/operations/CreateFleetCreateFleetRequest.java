package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFleetCreateFleetRequest {
    @SpeakeasyMetadata("form:name=DataEnabled")
    public Boolean dataEnabled;
    public CreateFleetCreateFleetRequest withDataEnabled(Boolean dataEnabled) {
        this.dataEnabled = dataEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DataLimit")
    public Long dataLimit;
    public CreateFleetCreateFleetRequest withDataLimit(Long dataLimit) {
        this.dataLimit = dataLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=IpCommandsMethod")
    public CreateFleetCreateFleetRequestIpCommandsMethodEnum ipCommandsMethod;
    public CreateFleetCreateFleetRequest withIpCommandsMethod(CreateFleetCreateFleetRequestIpCommandsMethodEnum ipCommandsMethod) {
        this.ipCommandsMethod = ipCommandsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=IpCommandsUrl")
    public String ipCommandsUrl;
    public CreateFleetCreateFleetRequest withIpCommandsUrl(String ipCommandsUrl) {
        this.ipCommandsUrl = ipCommandsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=NetworkAccessProfile")
    public String networkAccessProfile;
    public CreateFleetCreateFleetRequest withNetworkAccessProfile(String networkAccessProfile) {
        this.networkAccessProfile = networkAccessProfile;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsCommandsEnabled")
    public Boolean smsCommandsEnabled;
    public CreateFleetCreateFleetRequest withSmsCommandsEnabled(Boolean smsCommandsEnabled) {
        this.smsCommandsEnabled = smsCommandsEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsCommandsMethod")
    public CreateFleetCreateFleetRequestSmsCommandsMethodEnum smsCommandsMethod;
    public CreateFleetCreateFleetRequest withSmsCommandsMethod(CreateFleetCreateFleetRequestSmsCommandsMethodEnum smsCommandsMethod) {
        this.smsCommandsMethod = smsCommandsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsCommandsUrl")
    public String smsCommandsUrl;
    public CreateFleetCreateFleetRequest withSmsCommandsUrl(String smsCommandsUrl) {
        this.smsCommandsUrl = smsCommandsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateFleetCreateFleetRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}