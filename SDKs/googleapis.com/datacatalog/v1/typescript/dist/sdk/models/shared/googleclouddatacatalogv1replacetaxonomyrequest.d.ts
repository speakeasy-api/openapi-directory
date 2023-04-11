import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedTaxonomy } from "./googleclouddatacatalogv1serializedtaxonomy";
/**
 * Request message for ReplaceTaxonomy.
 */
export declare class GoogleCloudDatacatalogV1ReplaceTaxonomyRequest extends SpeakeasyBase {
    /**
     * A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
     */
    serializedTaxonomy?: GoogleCloudDatacatalogV1SerializedTaxonomy;
}
