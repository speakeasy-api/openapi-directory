import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PutBilling403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutBilling401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PutBillingResponse extends SpeakeasyBase {
    /**
     * Billing information
     */
    billing?: shared.Billing;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    putBilling401ApplicationJSONObject?: PutBilling401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putBilling403ApplicationJSONObject?: PutBilling403ApplicationJSON;
}
