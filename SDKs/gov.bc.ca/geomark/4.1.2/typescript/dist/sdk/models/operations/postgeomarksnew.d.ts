import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * When multiple=true select this option to allow overlapping geometries
 */
export declare enum PostGeomarksNewRequestBodyAllowOverlapEnum {
    False = "false",
    True = "true"
}
/**
 * If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.
 */
export declare enum PostGeomarksNewRequestBodyBufferCapEnum {
    Round = "ROUND",
    Square = "SQUARE",
    Flat = "FLAT"
}
/**
 * If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.
 */
export declare enum PostGeomarksNewRequestBodyBufferJoinEnum {
    Round = "ROUND",
    Mitre = "MITRE",
    Bevel = "BEVEL"
}
/**
 * The file format name extension of the input geometry.
 */
export declare enum PostGeomarksNewRequestBodyFormatEnum {
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
/**
 * Boolean flag indicating if multiple geometries are to be used for the geomark (true) or only a single geometry from the first geometry (false).
 */
export declare enum PostGeomarksNewRequestBodyMultipleEnum {
    False = "false",
    True = "true"
}
/**
 * The file format the geomark info resource should be returned using.
 */
export declare enum PostGeomarksNewRequestBodyResultFormatEnum {
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
/**
 * The srid of the coordinate system the input geometries are in. If the file includes a coordinate system definition that will be used.
 */
export declare enum PostGeomarksNewRequestBodySridEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    ThreeThousandAndFive = "3005",
    ThreeThousandEightHundredAndFiftySeven = "3857",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class PostGeomarksNewRequestBody extends SpeakeasyBase {
    /**
     * When multiple=true select this option to allow overlapping geometries
     */
    allowOverlap?: PostGeomarksNewRequestBodyAllowOverlapEnum;
    /**
     * The binary or character content representing the geometry or geometries
     */
    body?: string;
    /**
     * If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.
     */
    bufferCap?: PostGeomarksNewRequestBodyBufferCapEnum;
    /**
     * If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.
     */
    bufferJoin?: PostGeomarksNewRequestBodyBufferJoinEnum;
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
     * The file format name extension of the input geometry.
     */
    format?: PostGeomarksNewRequestBodyFormatEnum;
    /**
     * Boolean flag indicating if multiple geometries are to be used for the geomark (true) or only a single geometry from the first geometry (false).
     */
    multiple?: PostGeomarksNewRequestBodyMultipleEnum;
    /**
     * The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.
     */
    redirectUrl?: string;
    /**
     * The file format the geomark info resource should be returned using.
     */
    resultFormat?: PostGeomarksNewRequestBodyResultFormatEnum;
    /**
     * The srid of the coordinate system the input geometries are in. If the file includes a coordinate system definition that will be used.
     */
    srid?: PostGeomarksNewRequestBodySridEnum;
}
export declare class PostGeomarksNewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
