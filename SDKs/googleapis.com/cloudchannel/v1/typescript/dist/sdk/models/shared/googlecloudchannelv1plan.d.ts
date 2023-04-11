import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";
/**
 * Describes how a reseller will be billed.
 */
export declare enum GoogleCloudChannelV1PlanPaymentPlanEnum {
    PaymentPlanUnspecified = "PAYMENT_PLAN_UNSPECIFIED",
    Commitment = "COMMITMENT",
    Flexible = "FLEXIBLE",
    Free = "FREE",
    Trial = "TRIAL",
    Offline = "OFFLINE"
}
/**
 * Specifies when the payment needs to happen.
 */
export declare enum GoogleCloudChannelV1PlanPaymentTypeEnum {
    PaymentTypeUnspecified = "PAYMENT_TYPE_UNSPECIFIED",
    Prepay = "PREPAY",
    Postpay = "POSTPAY"
}
/**
 * The payment plan for the Offer. Describes how to make a payment.
 */
export declare class GoogleCloudChannelV1Plan extends SpeakeasyBase {
    /**
     * Reseller Billing account to charge after an offer transaction. Only present for Google Cloud Platform offers.
     */
    billingAccount?: string;
    /**
     * Represents period in days/months/years.
     */
    paymentCycle?: GoogleCloudChannelV1Period;
    /**
     * Describes how a reseller will be billed.
     */
    paymentPlan?: GoogleCloudChannelV1PlanPaymentPlanEnum;
    /**
     * Specifies when the payment needs to happen.
     */
    paymentType?: GoogleCloudChannelV1PlanPaymentTypeEnum;
    /**
     * Represents period in days/months/years.
     */
    trialPeriod?: GoogleCloudChannelV1Period;
}
