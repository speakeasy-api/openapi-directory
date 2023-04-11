import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPagesJsonRequest extends SpeakeasyBase {
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
export declare class GetPagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Pages
     */
    pages?: shared.Page[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
