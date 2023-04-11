import { SpeakeasyBase } from "../../../internal/utils";
import { DayPartTargeting } from "./dayparttargeting";
import { DimensionValue } from "./dimensionvalue";
import { GeoTargeting } from "./geotargeting";
import { KeyValueTargetingExpression } from "./keyvaluetargetingexpression";
import { LanguageTargeting } from "./languagetargeting";
import { ListTargetingExpression } from "./listtargetingexpression";
import { TechnologyTargeting } from "./technologytargeting";
/**
 * Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
 */
export declare class TargetingTemplate extends SpeakeasyBase {
    /**
     * Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
     */
    accountId?: string;
    /**
     * Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Day Part Targeting.
     */
    dayPartTargeting?: DayPartTargeting;
    /**
     * Geographical Targeting.
     */
    geoTargeting?: GeoTargeting;
    /**
     * ID of this targeting template. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Key Value Targeting Expression.
     */
    keyValueTargetingExpression?: KeyValueTargetingExpression;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate".
     */
    kind?: string;
    /**
     * Language Targeting.
     */
    languageTargeting?: LanguageTargeting;
    /**
     * Remarketing List Targeting Expression.
     */
    listTargetingExpression?: ListTargetingExpression;
    /**
     * Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser.
     */
    name?: string;
    /**
     * Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
     */
    subaccountId?: string;
    /**
     * Technology Targeting.
     */
    technologyTargeting?: TechnologyTargeting;
}
