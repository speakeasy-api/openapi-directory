import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSubAccountSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSubAccountRequest extends SpeakeasyBase {
    newSubaccountRequest: shared.NewSubaccountRequest;
    /**
     * ID of the primary account
     */
    apiKey: string;
}
export declare class CreateSubAccount422ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Validation Error
 */
export declare class CreateSubAccount422ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: CreateSubAccount422ApplicationJSONInvalidParameters[];
    title: string;
    type: string;
}
/**
 * Invalid API Key
 */
export declare class CreateSubAccount404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class CreateSubAccount401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class CreateSubAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Subaccount response
     */
    subaccountCreateResponse?: shared.SubaccountCreateResponse;
    /**
     * Action is forbidden
     */
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    /**
     * Credential is missing or invalid
     */
    createSubAccount401ApplicationJSONObject?: CreateSubAccount401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    createSubAccount404ApplicationJSONObject?: CreateSubAccount404ApplicationJSON;
    /**
     * Validation Error
     */
    createSubAccount422ApplicationJSONObject?: CreateSubAccount422ApplicationJSON;
}
