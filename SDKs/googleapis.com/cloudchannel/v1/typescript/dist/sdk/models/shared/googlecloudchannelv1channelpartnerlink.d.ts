import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfo, GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
/**
 * Required. State of the channel partner link.
 */
export declare enum GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum {
    ChannelPartnerLinkStateUnspecified = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
    Invited = "INVITED",
    Active = "ACTIVE",
    Revoked = "REVOKED",
    Suspended = "SUSPENDED"
}
/**
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
 */
export declare class GoogleCloudChannelV1ChannelPartnerLink extends SpeakeasyBase {
    /**
     * Cloud Identity information for the Cloud Channel Customer.
     */
    channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;
    /**
     * Output only. Timestamp of when the channel partner link is created.
     */
    createTime?: string;
    /**
     * Output only. URI of the web page where partner accepts the link invitation.
     */
    inviteLinkUri?: string;
    /**
     * Required. State of the channel partner link.
     */
    linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;
    /**
     * Output only. Resource name for the channel partner link, in the format accounts/{account_id}/channelPartnerLinks/{id}.
     */
    name?: string;
    /**
     * Output only. Public identifier that a customer must use to generate a transfer token to move to this distributor-reseller combination.
     */
    publicId?: string;
    /**
     * Required. Cloud Identity ID of the linked reseller.
     */
    resellerCloudIdentityId?: string;
    /**
     * Output only. Timestamp of when the channel partner link is updated.
     */
    updateTime?: string;
}
/**
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
 */
export declare class GoogleCloudChannelV1ChannelPartnerLinkInput extends SpeakeasyBase {
    /**
     * Cloud Identity information for the Cloud Channel Customer.
     */
    channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;
    /**
     * Required. State of the channel partner link.
     */
    linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;
    /**
     * Required. Cloud Identity ID of the linked reseller.
     */
    resellerCloudIdentityId?: string;
}
