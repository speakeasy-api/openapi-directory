import { SpeakeasyBase } from "../../../internal/utils";
import { Teacher } from "./teacher";
/**
 * Response when listing teachers.
 */
export declare class ListTeachersResponse extends SpeakeasyBase {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
    /**
     * Teachers who match the list request.
     */
    teachers?: Teacher[];
}
