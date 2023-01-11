import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialVideoContent } from "./editorialvideocontent";
/**
 * Editorial search results
**/
export declare class EditorialVideoSearchResults extends SpeakeasyBase {
    data: EditorialVideoContent[];
    message?: string;
    next?: string;
    page?: number;
    perPage?: number;
    prev?: string;
    searchId?: string;
    totalCount: number;
}
