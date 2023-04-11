import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Result of a funds availability check.
 */
export declare class OBWriteFundsConfirmationResponse1DataFundsAvailableResult extends SpeakeasyBase {
    /**
     * Flag to indicate the availability of funds given the Amount in the consent request.
     */
    fundsAvailable: boolean;
    /**
     * Date and time at which the funds availability check was generated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    fundsAvailableDateTime: Date;
}
export declare class OBWriteFundsConfirmationResponse1Data extends SpeakeasyBase {
    /**
     * Result of a funds availability check.
     */
    fundsAvailableResult?: OBWriteFundsConfirmationResponse1DataFundsAvailableResult;
    /**
     * Additional information that can not be captured in the structured fields and/or any other specific block.
     */
    supplementaryData?: Record<string, any>;
}
/**
 * Domestic Payment Consents Read
 */
export declare class OBWriteFundsConfirmationResponse1 extends SpeakeasyBase {
    data: OBWriteFundsConfirmationResponse1Data;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
