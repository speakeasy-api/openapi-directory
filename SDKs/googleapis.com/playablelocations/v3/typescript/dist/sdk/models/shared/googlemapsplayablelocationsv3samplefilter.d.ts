import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SampleSpacingOptions } from "./googlemapsplayablelocationsv3samplespacingoptions";
/**
 * Specifies the filters to use when searching for playable locations.
 */
export declare class GoogleMapsPlayablelocationsV3SampleFilter extends SpeakeasyBase {
    /**
     * Restricts the set of playable locations to just the [types](/maps/documentation/gaming/tt/types) that you want.
     */
    includedTypes?: string[];
    /**
     * Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are returned.
     */
    maxLocationCount?: number;
    /**
     * A set of options that specifies the separation between playable locations.
     */
    spacing?: GoogleMapsPlayablelocationsV3SampleSpacingOptions;
}
