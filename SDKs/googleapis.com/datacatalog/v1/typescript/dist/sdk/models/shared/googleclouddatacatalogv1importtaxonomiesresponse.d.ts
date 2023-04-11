import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Taxonomy } from "./googleclouddatacatalogv1taxonomy";
/**
 * Response message for ImportTaxonomies.
 */
export declare class GoogleCloudDatacatalogV1ImportTaxonomiesResponse extends SpeakeasyBase {
    /**
     * Imported taxonomies.
     */
    taxonomies?: GoogleCloudDatacatalogV1Taxonomy[];
}
