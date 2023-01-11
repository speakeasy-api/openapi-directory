import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialUpdatedContent } from "./editorialupdatedcontent";
/**
 * Editorial updated results
**/
export declare class EditorialUpdatedResults extends SpeakeasyBase {
    data: EditorialUpdatedContent[];
    message?: string;
    next?: string;
    perPage?: number;
    prev?: string;
}
