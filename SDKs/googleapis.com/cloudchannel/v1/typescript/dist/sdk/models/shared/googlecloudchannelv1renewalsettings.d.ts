import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";
/**
 * Describes how a reseller will be billed.
 */
export declare enum GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum {
    PaymentPlanUnspecified = "PAYMENT_PLAN_UNSPECIFIED",
    Commitment = "COMMITMENT",
    Flexible = "FLEXIBLE",
    Free = "FREE",
    Trial = "TRIAL",
    Offline = "OFFLINE"
}
/**
 * Renewal settings for renewable Offers.
 */
export declare class GoogleCloudChannelV1RenewalSettings extends SpeakeasyBase {
    /**
     * If false, the plan will be completed at the end date.
     */
    enableRenewal?: boolean;
    /**
     * Represents period in days/months/years.
     */
    paymentCycle?: GoogleCloudChannelV1Period;
    /**
     * Describes how a reseller will be billed.
     */
    paymentPlan?: GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
    /**
     * If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time.
     */
    resizeUnitCount?: boolean;
}
