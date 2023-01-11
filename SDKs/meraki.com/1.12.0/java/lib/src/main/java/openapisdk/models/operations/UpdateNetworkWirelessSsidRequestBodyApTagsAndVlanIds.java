package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public Long vlanId;
    public UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}