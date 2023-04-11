import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidApp } from "./androidapp";
/**
 * Successful response
 */
export declare class ListAndroidAppsResponse extends SpeakeasyBase {
    /**
     * List of each `AndroidApp` associated with the specified `FirebaseProject`.
     */
    apps?: AndroidApp[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListAndroidApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
}
