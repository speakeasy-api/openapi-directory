import { SpeakeasyBase } from "../../../internal/utils";
import { Student } from "./student";
/**
 * Response when listing students.
 */
export declare class ListStudentsResponse extends SpeakeasyBase {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
    /**
     * Students who match the list request.
     */
    students?: Student[];
}
