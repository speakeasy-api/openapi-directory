import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTokenServerList: readonly ["https://api.twilio.com"];
export declare class CreateTokenSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTokenCreateTokenRequest extends SpeakeasyBase {
    /**
     * The duration in seconds for which the generated credentials are valid. The default value is 86400 (24 hours).
     */
    ttl?: number;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    requestBody?: CreateTokenCreateTokenRequest;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountToken?: shared.ApiV2010AccountToken;
}
