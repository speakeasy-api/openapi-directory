import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Taxonomy } from "./googleclouddatacatalogv1taxonomy";
/**
 * Response message for ListTaxonomies.
 */
export declare class GoogleCloudDatacatalogV1ListTaxonomiesResponse extends SpeakeasyBase {
    /**
     * Pagination token of the next results page. Empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Taxonomies that the project contains.
     */
    taxonomies?: GoogleCloudDatacatalogV1Taxonomy[];
}
