import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudKmsInventoryV1ProtectedResource } from "./googlecloudkmsinventoryv1protectedresource";
/**
 * Response message for KeyTrackingService.SearchProtectedResources.
 */
export declare class GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Protected resources for this page.
     */
    protectedResources?: GoogleCloudKmsInventoryV1ProtectedResource[];
}
