import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostPagesJsonRequest extends SpeakeasyBase {
    /**
     * Page parameters.
     */
    pageModify: shared.PageModify;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostPagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    page?: shared.Page;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
