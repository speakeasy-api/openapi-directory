import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1InlineSource } from "./googleclouddatacatalogv1beta1inlinesource";
/**
 * Request message for ImportTaxonomies.
 */
export declare class GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest extends SpeakeasyBase {
    /**
     * Inline source used for taxonomies import.
     */
    inlineSource?: GoogleCloudDatacatalogV1beta1InlineSource;
}
