import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWAAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
export declare class GetWAAccountRequest extends SpeakeasyBase {
    /**
     * External id of the account you want to retrieve. In this case it will be the WhatsApp number.
     */
    externalId: string;
}
export declare class GetWAAccountResponse extends SpeakeasyBase {
    /**
     * Unauthorized.
     */
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK.
     */
    waAccountResponse?: shared.WAAccountResponse;
}
