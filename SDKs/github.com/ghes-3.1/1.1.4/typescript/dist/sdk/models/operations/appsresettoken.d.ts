import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsResetTokenRequestBody extends SpeakeasyBase {
    /**
     * The access_token of the OAuth application.
     */
    accessToken: string;
}
export declare class AppsResetTokenRequest extends SpeakeasyBase {
    requestBody: AppsResetTokenRequestBody;
    /**
     * The client ID of the GitHub app.
     */
    clientId: string;
}
export declare class AppsResetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
