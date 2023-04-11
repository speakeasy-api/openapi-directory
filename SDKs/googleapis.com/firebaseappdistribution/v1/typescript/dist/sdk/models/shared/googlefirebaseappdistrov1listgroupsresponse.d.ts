import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppdistroV1Group } from "./googlefirebaseappdistrov1group";
/**
 * The response message for `ListGroups`.
 */
export declare class GoogleFirebaseAppdistroV1ListGroupsResponse extends SpeakeasyBase {
    /**
     * The groups listed.
     */
    groups?: GoogleFirebaseAppdistroV1Group[];
    /**
     * A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
