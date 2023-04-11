import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1Run } from "./googleclouddatacataloglineagev1run";
/**
 * Response message for ListRuns.
 */
export declare class GoogleCloudDatacatalogLineageV1ListRunsResponse extends SpeakeasyBase {
    /**
     * The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The runs from the specified project and location.
     */
    runs?: GoogleCloudDatacatalogLineageV1Run[];
}
