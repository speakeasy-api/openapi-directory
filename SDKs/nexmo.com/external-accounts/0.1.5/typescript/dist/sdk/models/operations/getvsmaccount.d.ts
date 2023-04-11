import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVSMAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
export declare class GetVSMAccountRequest extends SpeakeasyBase {
    /**
     * External id of the account you want to retrieve. In this case it will be your Viber Service Message ID.
     */
    externalId: string;
}
export declare class GetVSMAccountResponse extends SpeakeasyBase {
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
    vsmAccountResponse?: shared.VSMAccountResponse;
}
