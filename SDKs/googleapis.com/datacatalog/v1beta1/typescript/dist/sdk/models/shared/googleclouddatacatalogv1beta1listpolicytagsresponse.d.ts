import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1PolicyTag } from "./googleclouddatacatalogv1beta1policytag";
/**
 * Response message for ListPolicyTags.
 */
export declare class GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse extends SpeakeasyBase {
    /**
     * Token used to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The policy tags that are in the requested taxonomy.
     */
    policyTags?: GoogleCloudDatacatalogV1beta1PolicyTag[];
}
