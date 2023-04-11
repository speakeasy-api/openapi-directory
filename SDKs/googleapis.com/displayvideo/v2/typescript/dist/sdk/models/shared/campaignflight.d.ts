import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Settings that track the planned spend and duration of a campaign.
 */
export declare class CampaignFlight extends SpeakeasyBase {
    /**
     * A date range.
     */
    plannedDates?: DateRange;
    /**
     * The amount the campaign is expected to spend for its given planned_dates. This will not limit serving, but will be used for tracking spend in the DV360 UI. The amount is in micros. Must be greater than or equal to 0. For example, 500000000 represents 500 standard units of the currency.
     */
    plannedSpendAmountMicros?: string;
}
