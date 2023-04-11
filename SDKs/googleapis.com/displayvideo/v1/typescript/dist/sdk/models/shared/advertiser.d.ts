import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserAdServerConfig } from "./advertiseradserverconfig";
import { AdvertiserCreativeConfig } from "./advertisercreativeconfig";
import { AdvertiserDataAccessConfig } from "./advertiserdataaccessconfig";
import { AdvertiserGeneralConfig, AdvertiserGeneralConfigInput } from "./advertisergeneralconfig";
import { AdvertiserTargetingConfig } from "./advertisertargetingconfig";
import { IntegrationDetails } from "./integrationdetails";
/**
 * Required. Controls whether or not insertion orders and line items of the advertiser can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_PAUSED` and `ENTITY_STATUS_SCHEDULED_FOR_DELETION`. * If set to `ENTITY_STATUS_SCHEDULED_FOR_DELETION`, the advertiser will be deleted 30 days from when it was first scheduled for deletion.
 */
export declare enum AdvertiserEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single advertiser in Display & Video 360 (DV360).
 */
export declare class AdvertiserInput extends SpeakeasyBase {
    /**
     * Ad server related settings of an advertiser.
     */
    adServerConfig?: AdvertiserAdServerConfig;
    /**
     * Creatives related settings of an advertiser.
     */
    creativeConfig?: AdvertiserCreativeConfig;
    /**
     * Settings that control how advertiser related data may be accessed.
     */
    dataAccessConfig?: AdvertiserDataAccessConfig;
    /**
     * Required. The display name of the advertiser. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not insertion orders and line items of the advertiser can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_PAUSED` and `ENTITY_STATUS_SCHEDULED_FOR_DELETION`. * If set to `ENTITY_STATUS_SCHEDULED_FOR_DELETION`, the advertiser will be deleted 30 days from when it was first scheduled for deletion.
     */
    entityStatus?: AdvertiserEntityStatusEnum;
    /**
     * General settings of an advertiser.
     */
    generalConfig?: AdvertiserGeneralConfigInput;
    /**
     * Integration details of an entry.
     */
    integrationDetails?: IntegrationDetails;
    /**
     * Required. Immutable. The unique ID of the partner that the advertiser belongs to.
     */
    partnerId?: string;
    /**
     * Whether integration with Mediaocean (Prisma) is enabled. By enabling this, you agree to the following: On behalf of my company, I authorize Mediaocean (Prisma) to send budget segment plans to Google, and I authorize Google to send corresponding reporting and invoices from DV360 to Mediaocean for the purposes of budget planning, billing, and reconciliation for this advertiser.
     */
    prismaEnabled?: boolean;
    /**
     * Targeting settings related to ad serving of an advertiser.
     */
    servingConfig?: AdvertiserTargetingConfig;
}
/**
 * A single advertiser in Display & Video 360 (DV360).
 */
export declare class Advertiser extends SpeakeasyBase {
    /**
     * Ad server related settings of an advertiser.
     */
    adServerConfig?: AdvertiserAdServerConfig;
    /**
     * Output only. The unique ID of the advertiser. Assigned by the system.
     */
    advertiserId?: string;
    /**
     * Creatives related settings of an advertiser.
     */
    creativeConfig?: AdvertiserCreativeConfig;
    /**
     * Settings that control how advertiser related data may be accessed.
     */
    dataAccessConfig?: AdvertiserDataAccessConfig;
    /**
     * Required. The display name of the advertiser. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not insertion orders and line items of the advertiser can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_PAUSED` and `ENTITY_STATUS_SCHEDULED_FOR_DELETION`. * If set to `ENTITY_STATUS_SCHEDULED_FOR_DELETION`, the advertiser will be deleted 30 days from when it was first scheduled for deletion.
     */
    entityStatus?: AdvertiserEntityStatusEnum;
    /**
     * General settings of an advertiser.
     */
    generalConfig?: AdvertiserGeneralConfig;
    /**
     * Integration details of an entry.
     */
    integrationDetails?: IntegrationDetails;
    /**
     * Output only. The resource name of the advertiser.
     */
    name?: string;
    /**
     * Required. Immutable. The unique ID of the partner that the advertiser belongs to.
     */
    partnerId?: string;
    /**
     * Whether integration with Mediaocean (Prisma) is enabled. By enabling this, you agree to the following: On behalf of my company, I authorize Mediaocean (Prisma) to send budget segment plans to Google, and I authorize Google to send corresponding reporting and invoices from DV360 to Mediaocean for the purposes of budget planning, billing, and reconciliation for this advertiser.
     */
    prismaEnabled?: boolean;
    /**
     * Targeting settings related to ad serving of an advertiser.
     */
    servingConfig?: AdvertiserTargetingConfig;
    /**
     * Output only. The timestamp when the advertiser was last updated. Assigned by the system.
     */
    updateTime?: string;
}
