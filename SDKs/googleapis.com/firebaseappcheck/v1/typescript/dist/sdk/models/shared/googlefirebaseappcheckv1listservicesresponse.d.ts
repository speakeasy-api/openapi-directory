import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";
/**
 * Response message for the ListServices method.
 */
export declare class GoogleFirebaseAppcheckV1ListServicesResponse extends SpeakeasyBase {
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
    /**
     * The Services retrieved.
     */
    services?: GoogleFirebaseAppcheckV1Service[];
}
