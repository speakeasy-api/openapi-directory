import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSubaccountSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RetrieveSubaccountRequest extends SpeakeasyBase {
    /**
     * ID of the primary account
     */
    apiKey: string;
    /**
     * ID of the subaccount
     */
    subaccountKey: string;
}
/**
 * Invalid API Key
 */
export declare class RetrieveSubaccount404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class RetrieveSubaccount401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveSubaccountResponse extends SpeakeasyBase {
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
    retrieveSubaccount401ApplicationJSONObject?: RetrieveSubaccount401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    retrieveSubaccount404ApplicationJSONObject?: RetrieveSubaccount404ApplicationJSON;
}
