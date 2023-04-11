import { SpeakeasyBase } from "../../../internal/utils";
import { BillingPeriodEnumBpTypeEnum } from "./billingperiodenumbptypeenum";
export declare class SupersimV1SimBillingPeriod extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) the Super SIM belongs to.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The end time of the Billing Period specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    endTime?: Date;
    periodType?: BillingPeriodEnumBpTypeEnum;
    /**
     * The SID of the Billing Period.
     */
    sid?: string;
    /**
     * The SID of the Super SIM the Billing Period belongs to.
     */
    simSid?: string;
    /**
     * The start time of the Billing Period specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startTime?: Date;
}
