import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Tag } from "./googleclouddatacatalogv1beta1tag";
/**
 * Response message for ListTags.
 */
export declare class GoogleCloudDatacatalogV1beta1ListTagsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results. It is set to empty if no items remain in results.
     */
    nextPageToken?: string;
    /**
     * Tag details.
     */
    tags?: GoogleCloudDatacatalogV1beta1Tag[];
}
