import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LinkApplicationSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
/**
 * Request body can contain any of the following. Please note, the only one application can be linked to the account.
 */
export declare class LinkApplicationRequestBody extends SpeakeasyBase {
    /**
     * There is just one application allowed per an account. The application type must be type "messages". For more information please see [Application API Spec](https://developer.nexmo.com/api/application.v2)
     */
    application: string;
}
/**
 * Provider of the account you want to assign an application to
 */
export declare enum LinkApplicationProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
export declare class LinkApplicationRequest extends SpeakeasyBase {
    /**
     * Request body can contain any of the following. Please note, the only one application can be linked to the account.
     */
    requestBody: LinkApplicationRequestBody;
    /**
     * External id of the account you want to assign an application to. This is channel dependent. For Facebook it will be your Facebook Page ID, for Viber your Viber Service Message ID and for WhatsApp your WhatsApp number.
     */
    externalId: string;
    /**
     * Provider of the account you want to assign an application to
     */
    provider: LinkApplicationProviderEnum;
}
/**
 * Conflict.
 */
export declare class LinkApplication409ApplicationJSON extends SpeakeasyBase {
    /**
     * The account reached limit of maximum number of linked applications. (The only one application is allowed per an account)
     */
    detail?: string;
    title?: string;
    type?: string;
}
/**
 * Forbidden.
 */
export declare class LinkApplication403ApplicationJSON extends SpeakeasyBase {
    /**
     * The application does not exist or the application type is not "messages"
     */
    detail?: string;
    title?: string;
    type?: string;
}
export declare class LinkApplicationResponse extends SpeakeasyBase {
    /**
     * Unauthorized.
     */
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    /**
     * OK.
     */
    accountResponse?: shared.AccountResponse;
    contentType: string;
    /**
     * Forbidden.
     */
    linkApplication403ApplicationJSONObject?: LinkApplication403ApplicationJSON;
    /**
     * Conflict.
     */
    linkApplication409ApplicationJSONObject?: LinkApplication409ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
