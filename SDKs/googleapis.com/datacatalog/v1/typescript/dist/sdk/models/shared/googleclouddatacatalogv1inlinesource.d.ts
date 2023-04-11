import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedTaxonomy } from "./googleclouddatacatalogv1serializedtaxonomy";
/**
 * Inline source containing taxonomies to import.
 */
export declare class GoogleCloudDatacatalogV1InlineSource extends SpeakeasyBase {
    /**
     * Required. Taxonomies to import.
     */
    taxonomies?: GoogleCloudDatacatalogV1SerializedTaxonomy[];
}
