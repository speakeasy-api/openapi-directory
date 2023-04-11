import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsDeleteGrantRequest extends SpeakeasyBase {
    /**
     * grant_id parameter
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
