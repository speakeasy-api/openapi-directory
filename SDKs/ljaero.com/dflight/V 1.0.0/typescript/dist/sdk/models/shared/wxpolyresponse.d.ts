import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area.
 */
export declare class WxPolyResponse extends SpeakeasyBase {
    found: Record<string, any>;
}
