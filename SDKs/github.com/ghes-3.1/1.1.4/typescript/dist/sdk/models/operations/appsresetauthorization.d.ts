import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsResetAuthorizationRequest extends SpeakeasyBase {
    accessToken: string;
    /**
     * The client ID of the GitHub app.
     */
    clientId: string;
}
export declare class AppsResetAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
}
