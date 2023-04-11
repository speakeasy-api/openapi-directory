import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PostBillingEstimate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostBillingEstimate401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostBillingEstimate400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostBillingEstimateResponse extends SpeakeasyBase {
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
    postBillingEstimate400ApplicationJSONObject?: PostBillingEstimate400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postBillingEstimate401ApplicationJSONObject?: PostBillingEstimate401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postBillingEstimate403ApplicationJSONObject?: PostBillingEstimate403ApplicationJSON;
}
