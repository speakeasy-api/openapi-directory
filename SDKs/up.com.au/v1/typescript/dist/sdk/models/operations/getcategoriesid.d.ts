import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier for the category.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class GetCategoriesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    getCategoryResponse?: shared.GetCategoryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
