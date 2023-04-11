import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ModifySubaccountSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ModifySubaccountRequest extends SpeakeasyBase {
    modifySubaccountRequest: shared.ModifySubaccountRequest;
    /**
     * ID of the primary account
     */
    apiKey: string;
    /**
     * ID of the subaccount
     */
    subaccountKey: string;
}
export declare class ModifySubaccount422ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Validation Error
 */
export declare class ModifySubaccount422ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: ModifySubaccount422ApplicationJSONInvalidParameters[];
    title: string;
    type: string;
}
/**
 * Invalid API Key
 */
export declare class ModifySubaccount404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class ModifySubaccount401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class ModifySubaccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Subaccount response
     */
    subaccountResponse?: shared.SubaccountResponse;
    /**
     * Action is forbidden
     */
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    /**
     * Credential is missing or invalid
     */
    modifySubaccount401ApplicationJSONObject?: ModifySubaccount401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    modifySubaccount404ApplicationJSONObject?: ModifySubaccount404ApplicationJSON;
    /**
     * Validation Error
     */
    modifySubaccount422ApplicationJSONObject?: ModifySubaccount422ApplicationJSON;
}
