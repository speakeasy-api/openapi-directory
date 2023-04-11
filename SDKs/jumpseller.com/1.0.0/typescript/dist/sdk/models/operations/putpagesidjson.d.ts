import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutPagesIdJsonRequest extends SpeakeasyBase {
    /**
     * Page parameters.
     */
    pageModify: shared.PageModify;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Page
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PutPagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Page Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    page?: shared.Page;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
