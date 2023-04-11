import { SpeakeasyBase } from "../../../internal/utils";
import { FirebaseProject } from "./firebaseproject";
/**
 * Successful response
 */
export declare class ListFirebaseProjectsResponse extends SpeakeasyBase {
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListFirebaseProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
    /**
     * One page of the list of Projects that are accessible to the caller.
     */
    results?: FirebaseProject[];
}
