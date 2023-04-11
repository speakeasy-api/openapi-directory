import { SpeakeasyBase } from "../../../internal/utils";
import { AdBlockingConfiguration } from "./adblockingconfiguration";
import { AudienceSegmentGroup } from "./audiencesegmentgroup";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { CreativeOptimizationConfiguration } from "./creativeoptimizationconfiguration";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { DimensionValue } from "./dimensionvalue";
import { EventTagOverride } from "./eventtagoverride";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { MeasurementPartnerCampaignLink } from "./measurementpartnercampaignlink";
/**
 * Contains properties of a Campaign Manager campaign.
 */
export declare class Campaign extends SpeakeasyBase {
    /**
     * Account ID of this campaign. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Campaign ad blocking settings.
     */
    adBlockingConfiguration?: AdBlockingConfiguration;
    /**
     * Additional creative optimization configurations for the campaign.
     */
    additionalCreativeOptimizationConfigurations?: CreativeOptimizationConfiguration[];
    /**
     * Advertiser group ID of the associated advertiser.
     */
    advertiserGroupId?: string;
    /**
     * Advertiser ID of this campaign. This is a required field.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Whether this campaign has been archived.
     */
    archived?: boolean;
    /**
     * Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.
     */
    audienceSegmentGroups?: AudienceSegmentGroup[];
    /**
     * Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign.
     */
    billingInvoiceCode?: string;
    /**
     * Click Through URL Suffix settings.
     */
    clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
    /**
     * Arbitrary comments about this campaign. Must be less than 256 characters long.
     */
    comment?: string;
    /**
     * Modification timestamp.
     */
    createInfo?: LastModifiedInfo;
    /**
     * List of creative group IDs that are assigned to the campaign.
     */
    creativeGroupIds?: string[];
    /**
     * Creative optimization settings.
     */
    creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;
    /**
     * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
     */
    defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
    /**
     * The default landing page ID for this campaign.
     */
    defaultLandingPageId?: string;
    endDate?: Date;
    /**
     * Overrides that can be used to activate or deactivate advertiser event tags.
     */
    eventTagOverrides?: EventTagOverride[];
    /**
     * External ID for this campaign.
     */
    externalId?: string;
    /**
     * ID of this campaign. This is a read-only auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign".
     */
    kind?: string;
    /**
     * Modification timestamp.
     */
    lastModifiedInfo?: LastModifiedInfo;
    measurementPartnerLink?: MeasurementPartnerCampaignLink;
    /**
     * Name of this campaign. This is a required field and must be less than 512 characters long and unique among campaigns of the same advertiser.
     */
    name?: string;
    /**
     * Whether Nielsen reports are enabled for this campaign.
     */
    nielsenOcrEnabled?: boolean;
    startDate?: Date;
    /**
     * Subaccount ID of this campaign. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Campaign trafficker contact emails.
     */
    traffickerEmails?: string[];
}
