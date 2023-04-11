import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails } from "./googleanalyticsadminv1alphalinkproposalstatusdetails";
/**
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
 */
export declare class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal extends SpeakeasyBase {
    /**
     * Immutable. Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean;
    /**
     * Output only. The display name of the Display & Video Advertiser. Only populated for proposals that originated from Display & Video 360.
     */
    advertiserDisplayName?: string;
    /**
     * Immutable. The Display & Video 360 Advertiser's advertiser ID.
     */
    advertiserId?: string;
    /**
     * Immutable. Enables the import of campaign data from Display & Video 360. If this field is not set on create, it will be defaulted to true.
     */
    campaignDataSharingEnabled?: boolean;
    /**
     * Immutable. Enables the import of cost data from Display & Video 360. This can only be enabled if campaign_data_sharing_enabled is enabled. If this field is not set on create, it will be defaulted to true.
     */
    costDataSharingEnabled?: boolean;
    /**
     * Status information for a link proposal.
     */
    linkProposalStatusDetails?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;
    /**
     * Output only. The resource name for this DisplayVideo360AdvertiserLinkProposal resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinkProposals/{proposalId} Note: proposalId is not the Display & Video 360 Advertiser ID
     */
    name?: string;
    /**
     * Input only. On a proposal being sent to Display & Video 360, this field must be set to the email address of an admin on the target advertiser. This is used to verify that the Google Analytics admin is aware of at least one admin on the Display & Video 360 Advertiser. This does not restrict approval of the proposal to a single user. Any admin on the Display & Video 360 Advertiser may approve the proposal.
     */
    validationEmail?: string;
}
/**
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
 */
export declare class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput extends SpeakeasyBase {
    /**
     * Immutable. Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean;
    /**
     * Immutable. The Display & Video 360 Advertiser's advertiser ID.
     */
    advertiserId?: string;
    /**
     * Immutable. Enables the import of campaign data from Display & Video 360. If this field is not set on create, it will be defaulted to true.
     */
    campaignDataSharingEnabled?: boolean;
    /**
     * Immutable. Enables the import of cost data from Display & Video 360. This can only be enabled if campaign_data_sharing_enabled is enabled. If this field is not set on create, it will be defaulted to true.
     */
    costDataSharingEnabled?: boolean;
    /**
     * Input only. On a proposal being sent to Display & Video 360, this field must be set to the email address of an admin on the target advertiser. This is used to verify that the Google Analytics admin is aware of at least one admin on the Display & Video 360 Advertiser. This does not restrict approval of the proposal to a single user. Any admin on the Display & Video 360 Advertiser may approve the proposal.
     */
    validationEmail?: string;
}
