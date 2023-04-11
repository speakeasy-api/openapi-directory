import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignBudget } from "./campaignbudget";
import { CampaignFlight } from "./campaignflight";
import { CampaignGoal } from "./campaigngoal";
import { FrequencyCap } from "./frequencycap";
/**
 * Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. * For CreateCampaign method, `ENTITY_STATUS_ARCHIVED` is not allowed.
 */
export declare enum CampaignEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single campaign.
 */
export declare class CampaignInput extends SpeakeasyBase {
    /**
     * The list of budgets available to this campaign. If this field is not set, the campaign uses an unlimited budget.
     */
    campaignBudgets?: CampaignBudget[];
    /**
     * Settings that track the planned spend and duration of a campaign.
     */
    campaignFlight?: CampaignFlight;
    /**
     * Settings that control the goal of a campaign.
     */
    campaignGoal?: CampaignGoal;
    /**
     * Required. The display name of the campaign. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. * For CreateCampaign method, `ENTITY_STATUS_ARCHIVED` is not allowed.
     */
    entityStatus?: CampaignEntityStatusEnum;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    frequencyCap?: FrequencyCap;
}
/**
 * A single campaign.
 */
export declare class Campaign extends SpeakeasyBase {
    /**
     * Output only. The unique ID of the advertiser the campaign belongs to.
     */
    advertiserId?: string;
    /**
     * The list of budgets available to this campaign. If this field is not set, the campaign uses an unlimited budget.
     */
    campaignBudgets?: CampaignBudget[];
    /**
     * Settings that track the planned spend and duration of a campaign.
     */
    campaignFlight?: CampaignFlight;
    /**
     * Settings that control the goal of a campaign.
     */
    campaignGoal?: CampaignGoal;
    /**
     * Output only. The unique ID of the campaign. Assigned by the system.
     */
    campaignId?: string;
    /**
     * Required. The display name of the campaign. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. * For CreateCampaign method, `ENTITY_STATUS_ARCHIVED` is not allowed.
     */
    entityStatus?: CampaignEntityStatusEnum;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    frequencyCap?: FrequencyCap;
    /**
     * Output only. The resource name of the campaign.
     */
    name?: string;
    /**
     * Output only. The timestamp when the campaign was last updated. Assigned by the system.
     */
    updateTime?: string;
}
