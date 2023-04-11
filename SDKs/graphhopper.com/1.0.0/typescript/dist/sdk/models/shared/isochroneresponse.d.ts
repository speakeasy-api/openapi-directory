import { SpeakeasyBase } from "../../../internal/utils";
import { IsochroneResponsePolygon } from "./isochroneresponsepolygon";
/**
 * Isochrone Result
 */
export declare class IsochroneResponse extends SpeakeasyBase {
    copyrights?: string[];
    /**
     * The list of polygons in GeoJson format. It can be used e.g. in the Leaflet framework:
     *
     * @remarks
     *
     * ```
     * L.geoJson(json.polygons).addTo(map)
     * ```
     *
     * The number of polygon is identical to the specified buckets in the query. Every polygon contains the bucket number in the properties section of the GeoJson.
     *
     */
    polygons?: IsochroneResponsePolygon[];
}
