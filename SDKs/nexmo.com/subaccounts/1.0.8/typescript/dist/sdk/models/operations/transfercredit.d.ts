import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransferCreditSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class TransferCreditRequest extends SpeakeasyBase {
    transferBalanceOrCreditRequest: shared.TransferBalanceOrCreditRequest;
    /**
     * ID of the primary account
     */
    apiKey: string;
}
export declare class TransferCredit422ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Validation Error
 */
export declare class TransferCredit422ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: TransferCredit422ApplicationJSONInvalidParameters[];
    title: string;
    type: string;
}
/**
 * Invalid API Key
 */
export declare class TransferCredit404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class TransferCredit401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class TransferCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Credit transfer response
     */
    transferCreditResponse?: shared.TransferCreditResponse;
    /**
     * Action is forbidden
     */
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    /**
     * Credential is missing or invalid
     */
    transferCredit401ApplicationJSONObject?: TransferCredit401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    transferCredit404ApplicationJSONObject?: TransferCredit404ApplicationJSON;
    /**
     * Validation Error
     */
    transferCredit422ApplicationJSONObject?: TransferCredit422ApplicationJSON;
}
