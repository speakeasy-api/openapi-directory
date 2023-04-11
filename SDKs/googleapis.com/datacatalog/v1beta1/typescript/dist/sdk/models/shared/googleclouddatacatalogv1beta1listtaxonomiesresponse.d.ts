import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Taxonomy } from "./googleclouddatacatalogv1beta1taxonomy";
/**
 * Response message for ListTaxonomies.
 */
export declare class GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse extends SpeakeasyBase {
    /**
     * Token used to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Taxonomies that the project contains.
     */
    taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[];
}
