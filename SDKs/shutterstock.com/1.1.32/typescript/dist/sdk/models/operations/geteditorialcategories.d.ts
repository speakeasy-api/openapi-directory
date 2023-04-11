import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialCategoryResults?: shared.EditorialCategoryResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
