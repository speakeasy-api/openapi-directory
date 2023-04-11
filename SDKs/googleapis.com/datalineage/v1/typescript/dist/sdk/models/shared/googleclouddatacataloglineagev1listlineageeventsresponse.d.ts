import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1LineageEvent } from "./googleclouddatacataloglineagev1lineageevent";
/**
 * Response message for ListLineageEvents.
 */
export declare class GoogleCloudDatacatalogLineageV1ListLineageEventsResponse extends SpeakeasyBase {
    /**
     * Lineage events from the specified project and location.
     */
    lineageEvents?: GoogleCloudDatacatalogLineageV1LineageEvent[];
    /**
     * The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
