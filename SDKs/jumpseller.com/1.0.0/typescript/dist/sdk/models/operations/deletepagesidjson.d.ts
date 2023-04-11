import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletePagesIdJsonRequest extends SpeakeasyBase {
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
export declare class DeletePagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Page Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deletePagesIdJSON200ApplicationJSONString?: string;
}
