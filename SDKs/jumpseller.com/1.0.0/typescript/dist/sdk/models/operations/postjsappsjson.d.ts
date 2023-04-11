import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostJsappsJsonRequest extends SpeakeasyBase {
    /**
     * JSApp parameters to create
     */
    jsAppEdit: shared.JSAppEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostJsappsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    jsApp?: shared.JSApp;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
