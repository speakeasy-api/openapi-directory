import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";
/**
 * A facet value which contains value names and their count.
 */
export declare class GoogleCloudRetailV2alphaSearchResponseFacetFacetValue extends SpeakeasyBase {
    /**
     * Number of items that have this facet value.
     */
    count?: string;
    /**
     * A floating point interval.
     */
    interval?: GoogleCloudRetailV2alphaInterval;
    /**
     * The maximum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true.
     */
    maxValue?: number;
    /**
     * The minimum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true.
     */
    minValue?: number;
    /**
     * Text value of a facet, such as "Black" for facet "colorFamilies".
     */
    value?: string;
}
