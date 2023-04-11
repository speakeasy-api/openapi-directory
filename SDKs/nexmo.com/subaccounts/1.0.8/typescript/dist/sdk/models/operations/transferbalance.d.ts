import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransferBalanceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class TransferBalanceRequest extends SpeakeasyBase {
    transferBalanceOrCreditRequest: shared.TransferBalanceOrCreditRequest;
    /**
     * ID of the primary account
     */
    apiKey: string;
}
export declare class TransferBalance422ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Validation Error
 */
export declare class TransferBalance422ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: TransferBalance422ApplicationJSONInvalidParameters[];
    title: string;
    type: string;
}
/**
 * Invalid API Key
 */
export declare class TransferBalance404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class TransferBalance401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class TransferBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Balance transfer response
     */
    transferBalanceResponse?: shared.TransferBalanceResponse;
    /**
     * Action is forbidden
     */
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    /**
     * Credential is missing or invalid
     */
    transferBalance401ApplicationJSONObject?: TransferBalance401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    transferBalance404ApplicationJSONObject?: TransferBalance404ApplicationJSON;
    /**
     * Validation Error
     */
    transferBalance422ApplicationJSONObject?: TransferBalance422ApplicationJSON;
}
