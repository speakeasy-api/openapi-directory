import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for AdvertiserService.AuditAdvertiser.
 */
export declare class AuditAdvertiserResponse extends SpeakeasyBase {
    /**
     * The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 4500000 ad group targeting options per advertiser. Qualifying Targeting types: * Channels, URLs, apps, and collections * Demographic * Google Audiences, including Affinity, Custom Affinity, and In-market audiences * Inventory source * Keyword * Mobile app category * User lists * Video targeting * Viewability
     */
    adGroupCriteriaCount?: string;
    /**
     * The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 900000 campaign targeting options per advertiser. Qualifying Targeting types: * Position * Browser * Connection speed * Day and time * Device and operating system * Digital content label * Sensitive categories * Environment * Geography, including business chains and proximity * ISP * Language * Third-party verification
     */
    campaignCriteriaCount?: string;
    /**
     * The number of channels created under this advertiser. These channels count towards the limit of 1000 channels per advertiser.
     */
    channelsCount?: string;
    /**
     * The number of negative keyword lists created under this advertiser. These negative keyword lists count towards the limit of 20 negative keyword lists per advertiser.
     */
    negativeKeywordListsCount?: string;
    /**
     * The number of negatively targeted channels created under this advertiser. These negatively targeted channels count towards the limit of 5 negatively targeted channels per advertiser.
     */
    negativelyTargetedChannelsCount?: string;
    /**
     * The number of ACTIVE and PAUSED campaigns under this advertiser. These campaigns count towards the limit of 9999 campaigns per advertiser.
     */
    usedCampaignsCount?: string;
    /**
     * The number of ACTIVE, PAUSED and DRAFT insertion orders under this advertiser. These insertion orders count towards the limit of 9999 insertion orders per advertiser.
     */
    usedInsertionOrdersCount?: string;
    /**
     * The number of ACTIVE, PAUSED, and DRAFT line items under this advertiser. These line items count towards the limit of 9999 line items per advertiser.
     */
    usedLineItemsCount?: string;
}
