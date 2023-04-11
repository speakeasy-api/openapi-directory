import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveMetricRestriction } from "./activemetricrestriction";
/**
 * The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
 */
export declare class SchemaRestrictionResponse extends SpeakeasyBase {
    /**
     * All restrictions actively enforced in creating the report. For example, `purchaseRevenue` always has the restriction type `REVENUE_DATA`. However, this active response restriction is only populated if the user's custom role disallows access to `REVENUE_DATA`.
     */
    activeMetricRestrictions?: ActiveMetricRestriction[];
}
