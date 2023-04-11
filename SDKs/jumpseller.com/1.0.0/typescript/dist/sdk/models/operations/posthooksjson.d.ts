import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostHooksJsonRequest extends SpeakeasyBase {
    /**
     * Hook parameters.
     */
    hookEdit: shared.HookEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostHooksJsonResponse extends SpeakeasyBase {
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
