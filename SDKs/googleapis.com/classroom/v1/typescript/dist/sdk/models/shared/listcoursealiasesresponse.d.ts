import { SpeakeasyBase } from "../../../internal/utils";
import { CourseAlias } from "./coursealias";
/**
 * Response when listing course aliases.
 */
export declare class ListCourseAliasesResponse extends SpeakeasyBase {
    /**
     * The course aliases.
     */
    aliases?: CourseAlias[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
