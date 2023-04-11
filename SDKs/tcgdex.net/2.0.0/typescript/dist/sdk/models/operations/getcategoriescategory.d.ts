import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesCategoryRequest extends SpeakeasyBase {
    category: string;
}
export declare class GetCategoriesCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List cards with the category
     */
    stringEndpoint?: shared.StringEndpoint;
}
