import { SpeakeasyBase } from "../../../internal/utils";
import { Course } from "./course";
/**
 * Response when listing courses.
 */
export declare class ListCoursesResponse extends SpeakeasyBase {
    /**
     * Courses that match the list request.
     */
    courses?: Course[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
