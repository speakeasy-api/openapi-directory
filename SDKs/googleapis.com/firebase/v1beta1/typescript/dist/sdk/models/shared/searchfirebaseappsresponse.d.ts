import { SpeakeasyBase } from "../../../internal/utils";
import { FirebaseAppInfo } from "./firebaseappinfo";
/**
 * Successful response
 */
export declare class SearchFirebaseAppsResponse extends SpeakeasyBase {
    /**
     * One page of results from a call to `SearchFirebaseApps`.
     */
    apps?: FirebaseAppInfo[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. This token can be used in a subsequent calls to `SearchFirebaseApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
}
