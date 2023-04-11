import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateMessengerAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
/**
 * Request body can contain any of the following
 */
export declare class UpdateMessengerAccountRequestBody extends SpeakeasyBase {
    accessToken?: string;
    applications?: string[];
    /**
     * The new account name
     */
    name?: string;
}
export declare class UpdateMessengerAccountRequest extends SpeakeasyBase {
    /**
     * Request body can contain any of the following
     */
    requestBody: UpdateMessengerAccountRequestBody;
    /**
     * External id of the account you want to update. In this case it is the Facebook Page ID.
     */
    externalId: string;
}
export declare class UpdateMessengerAccount400ApplicationJSONInvalidParams extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Bad Request.
 */
export declare class UpdateMessengerAccount400ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    invalidParams?: UpdateMessengerAccount400ApplicationJSONInvalidParams[];
    title?: string;
    type?: string;
}
/**
 * OK.
 */
export declare class UpdateMessengerAccount200ApplicationJSON extends SpeakeasyBase {
    /**
     * The provider access token
     */
    accessToken: string;
    /**
     * The external api key for this account
     */
    apiKey: string;
    /**
     * The array of associated application ids
     */
    applications?: string[];
    /**
     * The external identifier for this account. In this case it is the Facebook Page ID.
     */
    externalId: string;
    /**
     * The account name
     */
    name?: string;
    /**
     * The provider (will be `messenger`).
     */
    provider: string;
}
export declare class UpdateMessengerAccountResponse extends SpeakeasyBase {
    /**
     * Unauthorized.
     */
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    /**
     * Forbidden.
     */
    fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK.
     */
    updateMessengerAccount200ApplicationJSONObject?: UpdateMessengerAccount200ApplicationJSON;
    /**
     * Bad Request.
     */
    updateMessengerAccount400ApplicationJSONObject?: UpdateMessengerAccount400ApplicationJSON;
}
