import { SpeakeasyBase } from "../../../internal/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";
/**
 * Audience age group of this project.
 */
export declare enum ProjectAudienceAgeGroupEnum {
    PlanningAudienceAge1824 = "PLANNING_AUDIENCE_AGE_18_24",
    PlanningAudienceAge2534 = "PLANNING_AUDIENCE_AGE_25_34",
    PlanningAudienceAge3544 = "PLANNING_AUDIENCE_AGE_35_44",
    PlanningAudienceAge4554 = "PLANNING_AUDIENCE_AGE_45_54",
    PlanningAudienceAge5564 = "PLANNING_AUDIENCE_AGE_55_64",
    PlanningAudienceAge65OrMore = "PLANNING_AUDIENCE_AGE_65_OR_MORE",
    PlanningAudienceAgeUnknown = "PLANNING_AUDIENCE_AGE_UNKNOWN"
}
/**
 * Audience gender of this project.
 */
export declare enum ProjectAudienceGenderEnum {
    PlanningAudienceGenderMale = "PLANNING_AUDIENCE_GENDER_MALE",
    PlanningAudienceGenderFemale = "PLANNING_AUDIENCE_GENDER_FEMALE"
}
/**
 * Contains properties of a Planning project.
 */
export declare class Project extends SpeakeasyBase {
    /**
     * Account ID of this project.
     */
    accountId?: string;
    /**
     * Advertiser ID of this project.
     */
    advertiserId?: string;
    /**
     * Audience age group of this project.
     */
    audienceAgeGroup?: ProjectAudienceAgeGroupEnum;
    /**
     * Audience gender of this project.
     */
    audienceGender?: ProjectAudienceGenderEnum;
    /**
     * Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar.
     */
    budget?: string;
    /**
     * Client billing code of this project.
     */
    clientBillingCode?: string;
    /**
     * Name of the project client.
     */
    clientName?: string;
    endDate?: Date;
    /**
     * ID of this project. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#project".
     */
    kind?: string;
    /**
     * Modification timestamp.
     */
    lastModifiedInfo?: LastModifiedInfo;
    /**
     * Name of this project.
     */
    name?: string;
    /**
     * Overview of this project.
     */
    overview?: string;
    startDate?: Date;
    /**
     * Subaccount ID of this project.
     */
    subaccountId?: string;
    /**
     * Number of clicks that the advertiser is targeting.
     */
    targetClicks?: string;
    /**
     * Number of conversions that the advertiser is targeting.
     */
    targetConversions?: string;
    /**
     * CPA that the advertiser is targeting.
     */
    targetCpaNanos?: string;
    /**
     * CPC that the advertiser is targeting.
     */
    targetCpcNanos?: string;
    /**
     * vCPM from Active View that the advertiser is targeting.
     */
    targetCpmActiveViewNanos?: string;
    /**
     * CPM that the advertiser is targeting.
     */
    targetCpmNanos?: string;
    /**
     * Number of impressions that the advertiser is targeting.
     */
    targetImpressions?: string;
}
