import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of GeoJSON FeatureCollections, one for each Airspace type requested.
 */
export declare class AirspacePolyResponse extends SpeakeasyBase {
    found: Record<string, any>[];
}
