package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicyNumber")
    public Long accessPolicyNumber;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withAccessPolicyNumber(Long accessPolicyNumber) {
        this.accessPolicyNumber = accessPolicyNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicyType")
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum accessPolicyType;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withAccessPolicyType(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum accessPolicyType) {
        this.accessPolicyType = accessPolicyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedVlans")
    public String allowedVlans;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withAllowedVlans(String allowedVlans) {
        this.allowedVlans = allowedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flexibleStackingEnabled")
    public Boolean flexibleStackingEnabled;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withFlexibleStackingEnabled(Boolean flexibleStackingEnabled) {
        this.flexibleStackingEnabled = flexibleStackingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isolationEnabled")
    public Boolean isolationEnabled;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withIsolationEnabled(Boolean isolationEnabled) {
        this.isolationEnabled = isolationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkNegotiation")
    public String linkNegotiation;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withLinkNegotiation(String linkNegotiation) {
        this.linkNegotiation = linkNegotiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macAllowList")
    public String[] macAllowList;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withMacAllowList(String[] macAllowList) {
        this.macAllowList = macAllowList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poeEnabled")
    public Boolean poeEnabled;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withPoeEnabled(Boolean poeEnabled) {
        this.poeEnabled = poeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portScheduleId")
    public String portScheduleId;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withPortScheduleId(String portScheduleId) {
        this.portScheduleId = portScheduleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rstpEnabled")
    public Boolean rstpEnabled;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withRstpEnabled(Boolean rstpEnabled) {
        this.rstpEnabled = rstpEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stickyMacAllowList")
    public String[] stickyMacAllowList;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withStickyMacAllowList(String[] stickyMacAllowList) {
        this.stickyMacAllowList = stickyMacAllowList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stickyMacAllowListLimit")
    public Long stickyMacAllowListLimit;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withStickyMacAllowListLimit(Long stickyMacAllowListLimit) {
        this.stickyMacAllowListLimit = stickyMacAllowListLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stormControlEnabled")
    public Boolean stormControlEnabled;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withStormControlEnabled(Boolean stormControlEnabled) {
        this.stormControlEnabled = stormControlEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stpGuard")
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum stpGuard;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withStpGuard(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum stpGuard) {
        this.stpGuard = stpGuard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum type;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withType(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("udld")
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum udld;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withUdld(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum udld) {
        this.udld = udld;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceVlan")
    public Long voiceVlan;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody withVoiceVlan(Long voiceVlan) {
        this.voiceVlan = voiceVlan;
        return this;
    }
}