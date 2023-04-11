import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VeloAuthSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class VeloAuthRequest extends SpeakeasyBase {
    /**
     * OAuth grant type. Should use 'client_credentials'
     */
    grantType?: string;
}
export declare class VeloAuthResponse extends SpeakeasyBase {
    /**
     * Valid Authenication response
     */
    authResponse?: shared.AuthResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
