import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaDebugToken } from "./googlefirebaseappcheckv1betadebugtoken";
/**
 * Response message for the ListDebugTokens method.
 */
export declare class GoogleFirebaseAppcheckV1betaListDebugTokensResponse extends SpeakeasyBase {
    /**
     * The DebugTokens retrieved.
     */
    debugTokens?: GoogleFirebaseAppcheckV1betaDebugToken[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
}
