import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMessengerAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
export declare class CreateMessengerAccountRequestBody extends SpeakeasyBase {
    /**
     * This is the Facebook Business Page token. You can obtain the token using one of the following methods:
     *
     * @remarks
     *
     * * Linking your Facebook Business Page to your account [with our Dashboard tool](https://dashboard.nexmo.com/messages/social-channels/facebook-connect)
     * * Requesting a Page Access Token using the steps in the [Facebook token reference](https://developers.facebook.com/docs/pages/access-tokens/)
     *
     */
    accessToken: string;
    /**
     * Contains a list of application IDs which are linked to the account. <ul> <li>There is just one application allowed per an account.</li> <li>The application type must be type "messages".</li> </ul> For more information see [Application API spec](https://developer.nexmo.com/api/application.v2)
     */
    applications?: string[];
    /**
     * This is the unique identifier within the provider's domain. In this case it is the Page ID for your Facebook Page. Go to your Facebook Page, click "Settings", click "Messenger platform " scroll down to "Messenger link" to find your Page ID.
     */
    externalId: string;
    /**
     * Custom account name
     */
    name?: string;
}
export declare class CreateMessengerAccount400ApplicationJSONInvalidParams extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Bad Request.
 */
export declare class CreateMessengerAccount400ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    invalidParams?: CreateMessengerAccount400ApplicationJSONInvalidParams[];
    title?: string;
    type?: string;
}
export declare class CreateMessengerAccountResponse extends SpeakeasyBase {
    /**
     * Unauthorized.
     */
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    /**
     * Forbidden.
     */
    fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;
    contentType: string;
    /**
     * Bad Request.
     */
    createMessengerAccount400ApplicationJSONObject?: CreateMessengerAccount400ApplicationJSON;
    /**
     * Created.
     */
    messengerAccountResponse?: shared.MessengerAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
