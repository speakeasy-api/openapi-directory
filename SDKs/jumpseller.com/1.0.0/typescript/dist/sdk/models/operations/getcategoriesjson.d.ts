import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCategoriesJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    category?: shared.Category;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
