package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkSwitchAccessPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicyType")
    public CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum accessPolicyType;
    public CreateNetworkSwitchAccessPolicyRequestBody withAccessPolicyType(CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum accessPolicyType) {
        this.accessPolicyType = accessPolicyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestVlanId")
    public Long guestVlanId;
    public CreateNetworkSwitchAccessPolicyRequestBody withGuestVlanId(Long guestVlanId) {
        this.guestVlanId = guestVlanId;
        return this;
    }
    @JsonProperty("hostMode")
    public CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum hostMode;
    public CreateNetworkSwitchAccessPolicyRequestBody withHostMode(CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum hostMode) {
        this.hostMode = hostMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("increaseAccessSpeed")
    public Boolean increaseAccessSpeed;
    public CreateNetworkSwitchAccessPolicyRequestBody withIncreaseAccessSpeed(Boolean increaseAccessSpeed) {
        this.increaseAccessSpeed = increaseAccessSpeed;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkSwitchAccessPolicyRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radius")
    public CreateNetworkSwitchAccessPolicyRequestBodyRadius radius;
    public CreateNetworkSwitchAccessPolicyRequestBody withRadius(CreateNetworkSwitchAccessPolicyRequestBodyRadius radius) {
        this.radius = radius;
        return this;
    }
    @JsonProperty("radiusAccountingEnabled")
    public Boolean radiusAccountingEnabled;
    public CreateNetworkSwitchAccessPolicyRequestBody withRadiusAccountingEnabled(Boolean radiusAccountingEnabled) {
        this.radiusAccountingEnabled = radiusAccountingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAccountingServers")
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[] radiusAccountingServers;
    public CreateNetworkSwitchAccessPolicyRequestBody withRadiusAccountingServers(CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[] radiusAccountingServers) {
        this.radiusAccountingServers = radiusAccountingServers;
        return this;
    }
    @JsonProperty("radiusCoaSupportEnabled")
    public Boolean radiusCoaSupportEnabled;
    public CreateNetworkSwitchAccessPolicyRequestBody withRadiusCoaSupportEnabled(Boolean radiusCoaSupportEnabled) {
        this.radiusCoaSupportEnabled = radiusCoaSupportEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusGroupAttribute")
    public String radiusGroupAttribute;
    public CreateNetworkSwitchAccessPolicyRequestBody withRadiusGroupAttribute(String radiusGroupAttribute) {
        this.radiusGroupAttribute = radiusGroupAttribute;
        return this;
    }
    @JsonProperty("radiusServers")
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[] radiusServers;
    public CreateNetworkSwitchAccessPolicyRequestBody withRadiusServers(CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[] radiusServers) {
        this.radiusServers = radiusServers;
        return this;
    }
    @JsonProperty("radiusTestingEnabled")
    public Boolean radiusTestingEnabled;
    public CreateNetworkSwitchAccessPolicyRequestBody withRadiusTestingEnabled(Boolean radiusTestingEnabled) {
        this.radiusTestingEnabled = radiusTestingEnabled;
        return this;
    }
    @JsonProperty("urlRedirectWalledGardenEnabled")
    public Boolean urlRedirectWalledGardenEnabled;
    public CreateNetworkSwitchAccessPolicyRequestBody withUrlRedirectWalledGardenEnabled(Boolean urlRedirectWalledGardenEnabled) {
        this.urlRedirectWalledGardenEnabled = urlRedirectWalledGardenEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlRedirectWalledGardenRanges")
    public String[] urlRedirectWalledGardenRanges;
    public CreateNetworkSwitchAccessPolicyRequestBody withUrlRedirectWalledGardenRanges(String[] urlRedirectWalledGardenRanges) {
        this.urlRedirectWalledGardenRanges = urlRedirectWalledGardenRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceVlanClients")
    public Boolean voiceVlanClients;
    public CreateNetworkSwitchAccessPolicyRequestBody withVoiceVlanClients(Boolean voiceVlanClients) {
        this.voiceVlanClients = voiceVlanClients;
        return this;
    }
}