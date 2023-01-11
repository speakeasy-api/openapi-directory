package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchAccessPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicyType")
    public UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum accessPolicyType;
    public UpdateNetworkSwitchAccessPolicyRequestBody withAccessPolicyType(UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum accessPolicyType) {
        this.accessPolicyType = accessPolicyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestVlanId")
    public Long guestVlanId;
    public UpdateNetworkSwitchAccessPolicyRequestBody withGuestVlanId(Long guestVlanId) {
        this.guestVlanId = guestVlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostMode")
    public UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum hostMode;
    public UpdateNetworkSwitchAccessPolicyRequestBody withHostMode(UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum hostMode) {
        this.hostMode = hostMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("increaseAccessSpeed")
    public Boolean increaseAccessSpeed;
    public UpdateNetworkSwitchAccessPolicyRequestBody withIncreaseAccessSpeed(Boolean increaseAccessSpeed) {
        this.increaseAccessSpeed = increaseAccessSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkSwitchAccessPolicyRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radius")
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadius radius;
    public UpdateNetworkSwitchAccessPolicyRequestBody withRadius(UpdateNetworkSwitchAccessPolicyRequestBodyRadius radius) {
        this.radius = radius;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAccountingEnabled")
    public Boolean radiusAccountingEnabled;
    public UpdateNetworkSwitchAccessPolicyRequestBody withRadiusAccountingEnabled(Boolean radiusAccountingEnabled) {
        this.radiusAccountingEnabled = radiusAccountingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAccountingServers")
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[] radiusAccountingServers;
    public UpdateNetworkSwitchAccessPolicyRequestBody withRadiusAccountingServers(UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[] radiusAccountingServers) {
        this.radiusAccountingServers = radiusAccountingServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusCoaSupportEnabled")
    public Boolean radiusCoaSupportEnabled;
    public UpdateNetworkSwitchAccessPolicyRequestBody withRadiusCoaSupportEnabled(Boolean radiusCoaSupportEnabled) {
        this.radiusCoaSupportEnabled = radiusCoaSupportEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusGroupAttribute")
    public String radiusGroupAttribute;
    public UpdateNetworkSwitchAccessPolicyRequestBody withRadiusGroupAttribute(String radiusGroupAttribute) {
        this.radiusGroupAttribute = radiusGroupAttribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusServers")
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers[] radiusServers;
    public UpdateNetworkSwitchAccessPolicyRequestBody withRadiusServers(UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers[] radiusServers) {
        this.radiusServers = radiusServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusTestingEnabled")
    public Boolean radiusTestingEnabled;
    public UpdateNetworkSwitchAccessPolicyRequestBody withRadiusTestingEnabled(Boolean radiusTestingEnabled) {
        this.radiusTestingEnabled = radiusTestingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlRedirectWalledGardenEnabled")
    public Boolean urlRedirectWalledGardenEnabled;
    public UpdateNetworkSwitchAccessPolicyRequestBody withUrlRedirectWalledGardenEnabled(Boolean urlRedirectWalledGardenEnabled) {
        this.urlRedirectWalledGardenEnabled = urlRedirectWalledGardenEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlRedirectWalledGardenRanges")
    public String[] urlRedirectWalledGardenRanges;
    public UpdateNetworkSwitchAccessPolicyRequestBody withUrlRedirectWalledGardenRanges(String[] urlRedirectWalledGardenRanges) {
        this.urlRedirectWalledGardenRanges = urlRedirectWalledGardenRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceVlanClients")
    public Boolean voiceVlanClients;
    public UpdateNetworkSwitchAccessPolicyRequestBody withVoiceVlanClients(Boolean voiceVlanClients) {
        this.voiceVlanClients = voiceVlanClients;
        return this;
    }
}