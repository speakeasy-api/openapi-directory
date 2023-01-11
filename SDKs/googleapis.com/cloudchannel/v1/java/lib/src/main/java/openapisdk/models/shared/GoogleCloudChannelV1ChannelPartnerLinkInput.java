package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ChannelPartnerLinkInput
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
public class GoogleCloudChannelV1ChannelPartnerLinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerCloudIdentityInfo")
    public GoogleCloudChannelV1CloudIdentityInfoInput channelPartnerCloudIdentityInfo;
    public GoogleCloudChannelV1ChannelPartnerLinkInput withChannelPartnerCloudIdentityInfo(GoogleCloudChannelV1CloudIdentityInfoInput channelPartnerCloudIdentityInfo) {
        this.channelPartnerCloudIdentityInfo = channelPartnerCloudIdentityInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkState")
    public GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum linkState;
    public GoogleCloudChannelV1ChannelPartnerLinkInput withLinkState(GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum linkState) {
        this.linkState = linkState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resellerCloudIdentityId")
    public String resellerCloudIdentityId;
    public GoogleCloudChannelV1ChannelPartnerLinkInput withResellerCloudIdentityId(String resellerCloudIdentityId) {
        this.resellerCloudIdentityId = resellerCloudIdentityId;
        return this;
    }
}