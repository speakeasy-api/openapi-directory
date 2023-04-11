import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Location } from "./googlecloudmlv1location";
/**
 * Successful response
 */
export declare class GoogleCloudMlV1ListLocationsResponse extends SpeakeasyBase {
    /**
     * Locations where at least one type of CMLE capability is available.
     */
    locations?: GoogleCloudMlV1Location[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string;
}
