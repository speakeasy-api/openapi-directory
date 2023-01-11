package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWirelessRatePlanCreateWirelessRatePlanRequest {
    @SpeakeasyMetadata("form:name=CommandsEnabled")
    public Boolean commandsEnabled;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withCommandsEnabled(Boolean commandsEnabled) {
        this.commandsEnabled = commandsEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DataEnabled")
    public Boolean dataEnabled;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withDataEnabled(Boolean dataEnabled) {
        this.dataEnabled = dataEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DataLimit")
    public Long dataLimit;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withDataLimit(Long dataLimit) {
        this.dataLimit = dataLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=DataMetering")
    public String dataMetering;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withDataMetering(String dataMetering) {
        this.dataMetering = dataMetering;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=InternationalRoaming")
    public String[] internationalRoaming;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withInternationalRoaming(String[] internationalRoaming) {
        this.internationalRoaming = internationalRoaming;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingEnabled")
    public Boolean messagingEnabled;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withMessagingEnabled(Boolean messagingEnabled) {
        this.messagingEnabled = messagingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=NationalRoamingEnabled")
    public Boolean nationalRoamingEnabled;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withNationalRoamingEnabled(Boolean nationalRoamingEnabled) {
        this.nationalRoamingEnabled = nationalRoamingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceEnabled")
    public Boolean voiceEnabled;
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest withVoiceEnabled(Boolean voiceEnabled) {
        this.voiceEnabled = voiceEnabled;
        return this;
    }
}