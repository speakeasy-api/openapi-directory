import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJsappsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetJsappsJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    app?: shared.App;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
