import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnliWithoutApplicationnkApplicationSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
/**
 * Provider of the account you want to unlink an application from
 */
export declare enum UnliWithoutApplicationnkApplicationProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
export declare class UnliWithoutApplicationnkApplicationRequest extends SpeakeasyBase {
    /**
     * Id of the application you want to unlink
     */
    applicationId: string;
    /**
     * External id of the account you want to unlink an application from
     */
    externalId: string;
    /**
     * Provider of the account you want to unlink an application from
     */
    provider: UnliWithoutApplicationnkApplicationProviderEnum;
}
/**
 * Conflict.
 */
export declare class UnliWithoutApplicationnkApplication409ApplicationJSON extends SpeakeasyBase {
    /**
     * The application is not linked or doesn't exist.
     */
    detail?: string;
    title?: string;
    type?: string;
}
/**
 * Forbidden.
 */
export declare class UnliWithoutApplicationnkApplication403ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    title?: string;
    type?: string;
}
export declare class UnliWithoutApplicationnkApplicationResponse extends SpeakeasyBase {
    /**
     * Unauthorized.
     */
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden.
     */
    unliWithoutApplicationnkApplication403ApplicationJSONObject?: UnliWithoutApplicationnkApplication403ApplicationJSON;
    /**
     * Conflict.
     */
    unliWithoutApplicationnkApplication409ApplicationJSONObject?: UnliWithoutApplicationnkApplication409ApplicationJSON;
}
