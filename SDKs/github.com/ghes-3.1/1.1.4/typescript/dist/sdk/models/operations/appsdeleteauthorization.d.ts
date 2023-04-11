import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsDeleteAuthorizationRequestBody extends SpeakeasyBase {
    /**
     * The OAuth access token used to authenticate to the GitHub API.
     */
    accessToken: string;
}
export declare class AppsDeleteAuthorizationRequest extends SpeakeasyBase {
    requestBody: AppsDeleteAuthorizationRequestBody;
    /**
     * The client ID of the GitHub app.
     */
    clientId: string;
}
export declare class AppsDeleteAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
