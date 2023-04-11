import { SpeakeasyBase } from "../../../internal/utils";
import { CourseWorkMaterial } from "./courseworkmaterial";
/**
 * Response when listing course work material.
 */
export declare class ListCourseWorkMaterialResponse extends SpeakeasyBase {
    /**
     * Course work material items that match the request.
     */
    courseWorkMaterial?: CourseWorkMaterial[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
