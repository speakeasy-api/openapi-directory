import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the category.
     */
    id: number;
}
export declare class GetCategoriesIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    category?: shared.Category;
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
