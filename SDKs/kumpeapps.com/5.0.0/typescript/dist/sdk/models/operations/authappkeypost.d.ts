import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthAppkeyPostRequest extends SpeakeasyBase {
    /**
     * Password assigned to your app
     */
    password: string;
    /**
     * App supports YubiKey OTP
     */
    supportsYubikey: boolean;
    /**
     * Username assigned to your app
     */
    username: string;
}
export declare class AuthAppkeyPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * app key created
     */
    inlineResponse201?: shared.InlineResponse201;
}
