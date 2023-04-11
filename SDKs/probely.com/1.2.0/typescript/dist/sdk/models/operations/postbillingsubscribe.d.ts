import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PostBillingSubscribe403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostBillingSubscribe401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostBillingSubscribe400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostBillingSubscribeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Charges
     */
    invoice?: shared.Invoice;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postBillingSubscribe400ApplicationJSONObject?: PostBillingSubscribe400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postBillingSubscribe401ApplicationJSONObject?: PostBillingSubscribe401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postBillingSubscribe403ApplicationJSONObject?: PostBillingSubscribe403ApplicationJSON;
}
