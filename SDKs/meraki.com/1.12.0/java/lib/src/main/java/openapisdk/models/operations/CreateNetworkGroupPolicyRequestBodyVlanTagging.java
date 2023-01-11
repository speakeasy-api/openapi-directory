package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyVlanTagging
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
public class CreateNetworkGroupPolicyRequestBodyVlanTagging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum settings;
    public CreateNetworkGroupPolicyRequestBodyVlanTagging withSettings(CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public String vlanId;
    public CreateNetworkGroupPolicyRequestBodyVlanTagging withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}