import { SpeakeasyBase } from "../../../internal/utils";
import { BillingPeriodUnitEnum } from "./billingperiodunitenum";
import { PlanChargeModelEnum } from "./planchargemodelenum";
export declare class Plan extends SpeakeasyBase {
    /**
     * List of scan profiles allowed by the plan
     */
    allowedScanProfiles?: string[];
    /**
     * * per_unit - each target is paid independently
     *
     * @remarks
     * * flat_fee - targets are paid as a pool
     *
     */
    chargeModel?: PlanChargeModelEnum;
    /**
     * 3 letter currency code
     */
    currencyCode?: string;
    /**
     * Custom description for the resource
     */
    description?: string;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Is this a trial plan
     */
    isTrial?: boolean;
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * Number of of period unit between charges
     */
    period?: string;
    /**
     * Unit of billing period
     */
    periodUnit?: BillingPeriodUnitEnum;
    /**
     * Price in cents
     */
    price?: number;
}
