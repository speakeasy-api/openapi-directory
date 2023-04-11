import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHooksIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Hook
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetHooksIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    hook?: shared.Hook;
    /**
     * Hook Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
