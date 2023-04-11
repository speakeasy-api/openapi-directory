import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information related to a prepaid plan.
 */
export declare class PrepaidPlan extends SpeakeasyBase {
    /**
     * If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans.
     */
    allowExtendAfterTime?: string;
}
