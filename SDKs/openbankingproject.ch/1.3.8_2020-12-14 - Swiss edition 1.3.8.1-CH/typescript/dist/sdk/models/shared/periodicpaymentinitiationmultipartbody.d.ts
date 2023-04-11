import { SpeakeasyBase } from "../../../internal/utils";
import { PeriodicPaymentInitiationXmlPart2StandingorderTypeJson } from "./periodicpaymentinitiationxmlpart2standingordertypejson";
/**
 * The multipart message definition for the initiation of a periodic payment initiation
 *
 * @remarks
 * where the information of the payment is contained in a pain.001 message (Part 1) and
 * the additional informations related to the periodic payment is an additional JSON message (Part 2).
 *
 */
export declare class PeriodicPaymentInitiationMultipartBody extends SpeakeasyBase {
    /**
     * The body part 2 of a periodic payment initation request containes the execution related informations
     *
     * @remarks
     * of the periodic payment.
     *
     */
    jsonStandingorderType?: PeriodicPaymentInitiationXmlPart2StandingorderTypeJson;
    xmlSct?: any;
}
