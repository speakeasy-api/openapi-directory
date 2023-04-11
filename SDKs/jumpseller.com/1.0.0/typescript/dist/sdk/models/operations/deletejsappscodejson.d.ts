import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteJsappsCodeJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Code of the App
     */
    code: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class DeleteJsappsCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * App Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteJsappsCodeJSON200ApplicationJSONString?: string;
}
