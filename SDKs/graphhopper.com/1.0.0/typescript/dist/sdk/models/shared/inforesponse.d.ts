import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the server and the geographical area that it covers.
 */
export declare class InfoResponse extends SpeakeasyBase {
    /**
     * The bounding box of the geographical area covered by this GraphHopper instance. Format: `"minLon,minLat,maxLon,maxLat"
     *
     * @remarks
     *
     */
    bbox?: string;
    /**
     * The supported features, such as elevation, per vehicle profile.
     *
     * @remarks
     *
     */
    features?: Record<string, any>;
    /**
     * The version of the GraphHopper server that provided this response. This is not related to the API version.
     *
     * @remarks
     *
     */
    version?: string;
}
