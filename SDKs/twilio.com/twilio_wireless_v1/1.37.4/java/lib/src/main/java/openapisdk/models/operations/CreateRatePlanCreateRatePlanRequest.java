package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRatePlanCreateRatePlanRequest {
    @SpeakeasyMetadata("form:name=DataEnabled")
    public Boolean dataEnabled;
    public CreateRatePlanCreateRatePlanRequest withDataEnabled(Boolean dataEnabled) {
        this.dataEnabled = dataEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DataLimit")
    public Long dataLimit;
    public CreateRatePlanCreateRatePlanRequest withDataLimit(Long dataLimit) {
        this.dataLimit = dataLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=DataMetering")
    public String dataMetering;
    public CreateRatePlanCreateRatePlanRequest withDataMetering(String dataMetering) {
        this.dataMetering = dataMetering;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateRatePlanCreateRatePlanRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=InternationalRoaming")
    public String[] internationalRoaming;
    public CreateRatePlanCreateRatePlanRequest withInternationalRoaming(String[] internationalRoaming) {
        this.internationalRoaming = internationalRoaming;
        return this;
    }
    @SpeakeasyMetadata("form:name=InternationalRoamingDataLimit")
    public Long internationalRoamingDataLimit;
    public CreateRatePlanCreateRatePlanRequest withInternationalRoamingDataLimit(Long internationalRoamingDataLimit) {
        this.internationalRoamingDataLimit = internationalRoamingDataLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingEnabled")
    public Boolean messagingEnabled;
    public CreateRatePlanCreateRatePlanRequest withMessagingEnabled(Boolean messagingEnabled) {
        this.messagingEnabled = messagingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=NationalRoamingDataLimit")
    public Long nationalRoamingDataLimit;
    public CreateRatePlanCreateRatePlanRequest withNationalRoamingDataLimit(Long nationalRoamingDataLimit) {
        this.nationalRoamingDataLimit = nationalRoamingDataLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=NationalRoamingEnabled")
    public Boolean nationalRoamingEnabled;
    public CreateRatePlanCreateRatePlanRequest withNationalRoamingEnabled(Boolean nationalRoamingEnabled) {
        this.nationalRoamingEnabled = nationalRoamingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateRatePlanCreateRatePlanRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceEnabled")
    public Boolean voiceEnabled;
    public CreateRatePlanCreateRatePlanRequest withVoiceEnabled(Boolean voiceEnabled) {
        this.voiceEnabled = voiceEnabled;
        return this;
    }
}