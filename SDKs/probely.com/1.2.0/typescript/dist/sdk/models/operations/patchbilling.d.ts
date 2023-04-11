import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PatchBilling403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchBilling401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchBillingResponse extends SpeakeasyBase {
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
    patchBilling401ApplicationJSONObject?: PatchBilling401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchBilling403ApplicationJSONObject?: PatchBilling403ApplicationJSON;
}
