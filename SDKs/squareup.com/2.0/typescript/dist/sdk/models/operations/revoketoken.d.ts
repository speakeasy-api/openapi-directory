import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RevokeTokenSecurity extends SpeakeasyBase {
    oauth2ClientSecret: string;
}
export declare class RevokeTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    revokeTokenResponse?: shared.RevokeTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
