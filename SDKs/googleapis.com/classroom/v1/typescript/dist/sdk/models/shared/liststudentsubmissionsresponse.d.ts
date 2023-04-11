import { SpeakeasyBase } from "../../../internal/utils";
import { StudentSubmission } from "./studentsubmission";
/**
 * Response when listing student submissions.
 */
export declare class ListStudentSubmissionsResponse extends SpeakeasyBase {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
    /**
     * Student work that matches the request.
     */
    studentSubmissions?: StudentSubmission[];
}
