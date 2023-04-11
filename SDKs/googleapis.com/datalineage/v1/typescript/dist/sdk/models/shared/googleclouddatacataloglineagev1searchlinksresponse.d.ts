import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1Link } from "./googleclouddatacataloglineagev1link";
/**
 * Response message for SearchLinks.
 */
export declare class GoogleCloudDatacatalogLineageV1SearchLinksResponse extends SpeakeasyBase {
    /**
     * The list of links for a given asset. Can be empty if the asset has no relations of requested type (source or target).
     */
    links?: GoogleCloudDatacatalogLineageV1Link[];
    /**
     * The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.
     */
    nextPageToken?: string;
}
