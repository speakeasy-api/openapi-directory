import { SpeakeasyBase } from "../../../internal/utils";
import { CourseWork } from "./coursework";
/**
 * Response when listing course work.
 */
export declare class ListCourseWorkResponse extends SpeakeasyBase {
    /**
     * Course work items that match the request.
     */
    courseWork?: CourseWork[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
