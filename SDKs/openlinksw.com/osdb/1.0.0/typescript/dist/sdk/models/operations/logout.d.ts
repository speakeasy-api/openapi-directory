import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LogoutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    /**
     * Confirmation of a successful OSDB logout.
     */
    logoutResponse?: shared.LogoutResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
