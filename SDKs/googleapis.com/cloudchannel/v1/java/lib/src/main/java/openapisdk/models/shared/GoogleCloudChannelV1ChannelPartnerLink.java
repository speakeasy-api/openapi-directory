package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ChannelPartnerLink
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
public class GoogleCloudChannelV1ChannelPartnerLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerCloudIdentityInfo")
    public GoogleCloudChannelV1CloudIdentityInfo channelPartnerCloudIdentityInfo;
    public GoogleCloudChannelV1ChannelPartnerLink withChannelPartnerCloudIdentityInfo(GoogleCloudChannelV1CloudIdentityInfo channelPartnerCloudIdentityInfo) {
        this.channelPartnerCloudIdentityInfo = channelPartnerCloudIdentityInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudChannelV1ChannelPartnerLink withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inviteLinkUri")
    public String inviteLinkUri;
    public GoogleCloudChannelV1ChannelPartnerLink withInviteLinkUri(String inviteLinkUri) {
        this.inviteLinkUri = inviteLinkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkState")
    public GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum linkState;
    public GoogleCloudChannelV1ChannelPartnerLink withLinkState(GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum linkState) {
        this.linkState = linkState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1ChannelPartnerLink withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicId")
    public String publicId;
    public GoogleCloudChannelV1ChannelPartnerLink withPublicId(String publicId) {
        this.publicId = publicId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resellerCloudIdentityId")
    public String resellerCloudIdentityId;
    public GoogleCloudChannelV1ChannelPartnerLink withResellerCloudIdentityId(String resellerCloudIdentityId) {
        this.resellerCloudIdentityId = resellerCloudIdentityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudChannelV1ChannelPartnerLink withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}