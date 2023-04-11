import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJsappsCodeJsonRequest extends SpeakeasyBase {
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
export declare class GetJsappsCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    jsApp?: shared.JSApp;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
