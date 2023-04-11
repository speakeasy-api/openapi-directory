import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteMessengerAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
export declare class DeleteMessengerAccountRequest extends SpeakeasyBase {
    /**
     * External id of the account you want to delete. In this case it is the Facebook Page ID.
     */
    externalId: string;
}
export declare class DeleteMessengerAccountResponse extends SpeakeasyBase {
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
}
