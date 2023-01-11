import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialContent } from "./editorialcontent";
/**
 * Editorial search results
**/
export declare class EditorialSearchResults extends SpeakeasyBase {
    data: EditorialContent[];
    message?: string;
    next?: string;
    page?: number;
    perPage?: number;
    prev?: string;
    searchId?: string;
    totalCount: number;
}
