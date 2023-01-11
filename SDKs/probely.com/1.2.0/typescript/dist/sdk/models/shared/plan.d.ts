import { SpeakeasyBase } from "../../../internal/utils";
import { PlanChargeModelEnum } from "./planchargemodelenum";
import { BillingPeriodUnitEnum } from "./billingperiodunitenum";
export declare class Plan extends SpeakeasyBase {
    allowedScanProfiles?: string[];
    chargeModel?: PlanChargeModelEnum;
    currencyCode?: string;
    description?: string;
    id?: string;
    isTrial?: boolean;
    name?: string;
    period?: string;
    periodUnit?: BillingPeriodUnitEnum;
    price?: number;
}
