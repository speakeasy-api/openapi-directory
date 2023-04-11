import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessengerAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
export declare class GetMessengerAccountRequest extends SpeakeasyBase {
    /**
     * External id of the account you want to retrieve. In this case it is the Facebook Page ID.
     */
    externalId: string;
}
export declare class GetMessengerAccountResponse extends SpeakeasyBase {
    /**
     * Unauthorized.
     */
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    /**
     * OK.
     */
    messengerAccountResponse?: shared.MessengerAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
