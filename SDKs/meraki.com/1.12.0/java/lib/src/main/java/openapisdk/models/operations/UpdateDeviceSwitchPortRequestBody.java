package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceSwitchPortRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicyNumber")
    public Long accessPolicyNumber;
    public UpdateDeviceSwitchPortRequestBody withAccessPolicyNumber(Long accessPolicyNumber) {
        this.accessPolicyNumber = accessPolicyNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicyType")
    public UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum accessPolicyType;
    public UpdateDeviceSwitchPortRequestBody withAccessPolicyType(UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum accessPolicyType) {
        this.accessPolicyType = accessPolicyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedVlans")
    public String allowedVlans;
    public UpdateDeviceSwitchPortRequestBody withAllowedVlans(String allowedVlans) {
        this.allowedVlans = allowedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateDeviceSwitchPortRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flexibleStackingEnabled")
    public Boolean flexibleStackingEnabled;
    public UpdateDeviceSwitchPortRequestBody withFlexibleStackingEnabled(Boolean flexibleStackingEnabled) {
        this.flexibleStackingEnabled = flexibleStackingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isolationEnabled")
    public Boolean isolationEnabled;
    public UpdateDeviceSwitchPortRequestBody withIsolationEnabled(Boolean isolationEnabled) {
        this.isolationEnabled = isolationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkNegotiation")
    public String linkNegotiation;
    public UpdateDeviceSwitchPortRequestBody withLinkNegotiation(String linkNegotiation) {
        this.linkNegotiation = linkNegotiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macAllowList")
    public String[] macAllowList;
    public UpdateDeviceSwitchPortRequestBody withMacAllowList(String[] macAllowList) {
        this.macAllowList = macAllowList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateDeviceSwitchPortRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poeEnabled")
    public Boolean poeEnabled;
    public UpdateDeviceSwitchPortRequestBody withPoeEnabled(Boolean poeEnabled) {
        this.poeEnabled = poeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portScheduleId")
    public String portScheduleId;
    public UpdateDeviceSwitchPortRequestBody withPortScheduleId(String portScheduleId) {
        this.portScheduleId = portScheduleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rstpEnabled")
    public Boolean rstpEnabled;
    public UpdateDeviceSwitchPortRequestBody withRstpEnabled(Boolean rstpEnabled) {
        this.rstpEnabled = rstpEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stickyMacAllowList")
    public String[] stickyMacAllowList;
    public UpdateDeviceSwitchPortRequestBody withStickyMacAllowList(String[] stickyMacAllowList) {
        this.stickyMacAllowList = stickyMacAllowList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stickyMacAllowListLimit")
    public Long stickyMacAllowListLimit;
    public UpdateDeviceSwitchPortRequestBody withStickyMacAllowListLimit(Long stickyMacAllowListLimit) {
        this.stickyMacAllowListLimit = stickyMacAllowListLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stormControlEnabled")
    public Boolean stormControlEnabled;
    public UpdateDeviceSwitchPortRequestBody withStormControlEnabled(Boolean stormControlEnabled) {
        this.stormControlEnabled = stormControlEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stpGuard")
    public UpdateDeviceSwitchPortRequestBodyStpGuardEnum stpGuard;
    public UpdateDeviceSwitchPortRequestBody withStpGuard(UpdateDeviceSwitchPortRequestBodyStpGuardEnum stpGuard) {
        this.stpGuard = stpGuard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateDeviceSwitchPortRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateDeviceSwitchPortRequestBodyTypeEnum type;
    public UpdateDeviceSwitchPortRequestBody withType(UpdateDeviceSwitchPortRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("udld")
    public UpdateDeviceSwitchPortRequestBodyUdldEnum udld;
    public UpdateDeviceSwitchPortRequestBody withUdld(UpdateDeviceSwitchPortRequestBodyUdldEnum udld) {
        this.udld = udld;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public UpdateDeviceSwitchPortRequestBody withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceVlan")
    public Long voiceVlan;
    public UpdateDeviceSwitchPortRequestBody withVoiceVlan(Long voiceVlan) {
        this.voiceVlan = voiceVlan;
        return this;
    }
}