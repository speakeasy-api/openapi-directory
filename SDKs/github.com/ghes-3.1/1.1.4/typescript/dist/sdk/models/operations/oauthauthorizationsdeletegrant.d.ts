import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsDeleteGrantRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the grant.
     */
    grantId: number;
}
export declare class OauthAuthorizationsDeleteGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
