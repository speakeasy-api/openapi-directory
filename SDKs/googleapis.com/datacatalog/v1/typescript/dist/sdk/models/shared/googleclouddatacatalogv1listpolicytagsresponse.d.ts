import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PolicyTag } from "./googleclouddatacatalogv1policytag";
/**
 * Response message for ListPolicyTags.
 */
export declare class GoogleCloudDatacatalogV1ListPolicyTagsResponse extends SpeakeasyBase {
    /**
     * Pagination token of the next results page. Empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The policy tags that belong to the taxonomy.
     */
    policyTags?: GoogleCloudDatacatalogV1PolicyTag[];
}
