import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEditorialImageCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialImageCategoryResults?: shared.EditorialImageCategoryResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
