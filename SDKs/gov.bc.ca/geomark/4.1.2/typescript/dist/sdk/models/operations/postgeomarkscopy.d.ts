import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Select this option to allow overlapping geometries
 */
export declare enum PostGeomarksCopyAllowOverlapEnum {
    False = "false",
    True = "true"
}
/**
 * If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.
 */
export declare enum PostGeomarksCopyBufferCapEnum {
    Round = "ROUND",
    Square = "SQUARE",
    Flat = "FLAT"
}
/**
 * If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.
 */
export declare enum PostGeomarksCopyBufferJoinEnum {
    Round = "ROUND",
    Mitre = "MITRE",
    Bevel = "BEVEL"
}
/**
 * The file format the geomark info resource should be returned using.
 */
export declare enum PostGeomarksCopyResultFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Kmz = "kmz",
    Shp = "shp",
    Shpz = "shpz",
    Geojson = "geojson",
    Gml = "gml",
    Gpkg = "gpkg",
    Wkt = "wkt"
}
export declare class PostGeomarksCopyRequest extends SpeakeasyBase {
    /**
     * Select this option to allow overlapping geometries
     */
    allowOverlap?: PostGeomarksCopyAllowOverlapEnum;
    /**
     * If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.
     */
    bufferCap?: PostGeomarksCopyBufferCapEnum;
    /**
     * If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.
     */
    bufferJoin?: PostGeomarksCopyBufferJoinEnum;
    /**
     * The amount to buffer the geometry in metres, must only contain numerical digits (e.g 10). Leave blank and no buffer will be added to input geometries. If blank then any Point, LineString, MultiPoint and MultiLineString geometries will be ignored.
     */
    bufferMetres?: number;
    /**
     * If bufferMetres is specified, the maximum ratio of distance from the original geometry to a mitre buffer point and the buffer amount. If the ratio is greater than this a bevel will be used instead. This prevents infinite distances when the angle between the two lines at a join is small. Must be > 0.
     */
    bufferMitreLimit?: number;
    /**
     * If bufferMetres is specified, the number of line segments used in each quadrant to approximate the curve for round end-cap and join styles. Must be > 0.
     */
    bufferSegments?: number;
    /**
     * The callback function a JSON result format would be wrapped in to support Ajax requests.
     */
    callback?: string;
    /**
     * The url to redirect if the geomark could not be created. The URL will include a <fieldName>_Error parameter with the error message for the field that caused the error.
     */
    failureRedirectUrl?: string;
    /**
     * One or more geomark URLs or identifiers to create the new geomark from.
     */
    geomarkUrl: string;
    /**
     * The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.
     */
    redirectUrl?: string;
    /**
     * The file format the geomark info resource should be returned using.
     */
    resultFormat?: PostGeomarksCopyResultFormatEnum;
}
export declare class PostGeomarksCopyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
