import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppdistroV1Release } from "./googlefirebaseappdistrov1release";
/**
 * The response message for `ListReleases`.
 */
export declare class GoogleFirebaseAppdistroV1ListReleasesResponse extends SpeakeasyBase {
    /**
     * A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The releases
     */
    releases?: GoogleFirebaseAppdistroV1Release[];
}
