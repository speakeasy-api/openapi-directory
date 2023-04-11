import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsGetGrantRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the grant.
     */
    grantId: number;
}
export declare class OauthAuthorizationsGetGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    applicationGrant?: shared.ApplicationGrant;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
