package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyVlanTagging
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
public class UpdateNetworkGroupPolicyRequestBodyVlanTagging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum settings;
    public UpdateNetworkGroupPolicyRequestBodyVlanTagging withSettings(UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public String vlanId;
    public UpdateNetworkGroupPolicyRequestBodyVlanTagging withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}