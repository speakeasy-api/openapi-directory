import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEditorialVideoCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialVideoCategoryResults?: shared.EditorialVideoCategoryResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
