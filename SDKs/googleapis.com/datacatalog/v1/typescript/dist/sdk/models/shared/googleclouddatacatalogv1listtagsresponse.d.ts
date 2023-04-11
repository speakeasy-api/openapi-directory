import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Tag } from "./googleclouddatacatalogv1tag";
/**
 * Response message for ListTags.
 */
export declare class GoogleCloudDatacatalogV1ListTagsResponse extends SpeakeasyBase {
    /**
     * Pagination token of the next results page. Empty if there are no more items in results.
     */
    nextPageToken?: string;
    /**
     * Tag details.
     */
    tags?: GoogleCloudDatacatalogV1Tag[];
}
