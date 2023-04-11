import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateAccessTokenRequest extends SpeakeasyBase {
    /**
     * An OTP from the user's registered MFA Device
     *
     * @remarks
     *
     */
    accessTokenValidationRequest: shared.AccessTokenValidationRequest;
    /**
     * Bearer token authorization leg of validate
     */
    authorization?: string;
}
export declare class ValidateAccessTokenResponse extends SpeakeasyBase {
    /**
     * User request has been validated
     */
    accessTokenResponse?: shared.AccessTokenResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
}
