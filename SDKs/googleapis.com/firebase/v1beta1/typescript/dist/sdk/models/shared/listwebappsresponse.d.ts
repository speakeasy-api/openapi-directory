import { SpeakeasyBase } from "../../../internal/utils";
import { WebApp } from "./webapp";
/**
 * Successful response
 */
export declare class ListWebAppsResponse extends SpeakeasyBase {
    /**
     * List of each `WebApp` associated with the specified `FirebaseProject`.
     */
    apps?: WebApp[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListWebApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
}
