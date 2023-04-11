import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataTaxonomy } from "./googleclouddataplexv1datataxonomy";
/**
 * List DataTaxonomies response.
 */
export declare class GoogleCloudDataplexV1ListDataTaxonomiesResponse extends SpeakeasyBase {
    /**
     * DataTaxonomies under the given parent location.
     */
    dataTaxonomies?: GoogleCloudDataplexV1DataTaxonomy[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
