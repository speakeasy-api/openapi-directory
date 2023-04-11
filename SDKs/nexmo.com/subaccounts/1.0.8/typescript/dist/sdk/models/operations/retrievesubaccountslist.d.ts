import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSubaccountsListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RetrieveSubaccountsListRequest extends SpeakeasyBase {
    /**
     * ID of the primary account
     */
    apiKey: string;
}
/**
 * Invalid API Key
 */
export declare class RetrieveSubaccountsList404ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class RetrieveSubaccountsList401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveSubaccountsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Subaccounts response
     */
    subaccountsAllResponse?: shared.SubaccountsAllResponse;
    /**
     * Action is forbidden
     */
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    /**
     * Credential is missing or invalid
     */
    retrieveSubaccountsList401ApplicationJSONObject?: RetrieveSubaccountsList401ApplicationJSON;
    /**
     * The account ID provided does not exist in our system or you do not have access
     */
    retrieveSubaccountsList404ApplicationJSONObject?: RetrieveSubaccountsList404ApplicationJSON;
}
