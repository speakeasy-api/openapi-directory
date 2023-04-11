import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchResponseFacetFacetValue } from "./googlecloudretailv2betasearchresponsefacetfacetvalue";
/**
 * A facet result.
 */
export declare class GoogleCloudRetailV2betaSearchResponseFacet extends SpeakeasyBase {
    /**
     * Whether the facet is dynamically generated.
     */
    dynamicFacet?: boolean;
    /**
     * The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1".
     */
    key?: string;
    /**
     * The facet values for this field.
     */
    values?: GoogleCloudRetailV2betaSearchResponseFacetFacetValue[];
}
