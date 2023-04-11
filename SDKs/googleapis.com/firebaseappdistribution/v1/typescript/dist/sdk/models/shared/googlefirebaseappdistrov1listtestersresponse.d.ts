import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppdistroV1Tester } from "./googlefirebaseappdistrov1tester";
/**
 * The response message for `ListTesters`.
 */
export declare class GoogleFirebaseAppdistroV1ListTestersResponse extends SpeakeasyBase {
    /**
     * A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The testers listed.
     */
    testers?: GoogleFirebaseAppdistroV1Tester[];
}
