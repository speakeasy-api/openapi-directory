import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHooksJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * List restriction
     */
    limit?: number;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * List page
     */
    page?: number;
}
export declare class GetHooksJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Hooks
     */
    hooks?: shared.Hook[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
