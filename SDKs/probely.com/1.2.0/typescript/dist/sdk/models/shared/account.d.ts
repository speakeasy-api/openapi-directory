import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAutoCollectionEnum } from "./accountautocollectionenum";
import { AccountStatusEnum } from "./accountstatusenum";
import { Plan } from "./plan";
/**
 * Account data
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Collection for the next billing period is autommatic/manual
     */
    autoCollection?: AccountAutoCollectionEnum;
    /**
     * Account balance in cents
     */
    balance?: number;
    /**
     * 3 letter currency code
     */
    balanceCurrencyCode?: string;
    /**
     * Number of free targets
     */
    freeTargetQuantity?: number;
    /**
     * Has account used up it's trial
     */
    hasUsedTrial?: boolean;
    /**
     * Heroku accounts (for future use)
     */
    heroku?: boolean;
    /**
     * Date of next billing
     */
    nextBillingAt?: Date;
    plan?: Plan;
    /**
     * Number of subscribed targets
     */
    planTargetQuantity?: number;
    /**
     * Maximum number of subscribed target for pool plans
     */
    poolSize?: number;
    /**
     * * active - active subscription, either trial or paying
     *
     * @remarks
     * * trial_ended - trial ended and subscription was discontinued
     * * canceled - subscription canceled
     *
     */
    status?: AccountStatusEnum;
    /**
     * Trial termination date
     */
    trialEnd?: Date;
}
