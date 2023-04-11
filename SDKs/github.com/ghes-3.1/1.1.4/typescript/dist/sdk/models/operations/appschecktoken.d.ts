import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsCheckTokenRequestBody extends SpeakeasyBase {
    /**
     * The access_token of the OAuth application.
     */
    accessToken: string;
}
export declare class AppsCheckTokenRequest extends SpeakeasyBase {
    requestBody: AppsCheckTokenRequestBody;
    /**
     * The client ID of the GitHub app.
     */
    clientId: string;
}
export declare class AppsCheckTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
