import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCategoriesIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Category
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class DeleteCategoriesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Category Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteCategoriesIdJSON200ApplicationJSONString?: string;
}
