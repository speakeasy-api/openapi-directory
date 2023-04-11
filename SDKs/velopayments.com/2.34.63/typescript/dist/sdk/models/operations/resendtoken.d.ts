import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResendTokenRequest extends SpeakeasyBase {
    /**
     * The type of token to resend
     */
    resendTokenRequest: shared.ResendTokenRequest;
    /**
     * The UUID of the User.
     */
    userId: string;
}
export declare class ResendTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
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
