import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Image format to be returned
 */
export declare enum GetMapFormatEnum {
    ImageJpeg = "image/jpeg",
    ImagePng = "image/png"
}
/**
 * Map layers requested Currently only the basic layer is available
 */
export declare enum GetMapLayersEnum {
    Basic = "basic"
}
/**
 * Request type
 */
export declare enum GetMapRequestEnum {
    GetMap = "GetMap"
}
/**
 * Service type
 */
export declare enum GetMapServiceEnum {
    Wms = "WMS"
}
/**
 * Projection used in describing the <b>bbox</b> EPSG:3857 is
 *
 * @remarks
 * recommended, particularly at higher zoom levels. (Note that
 * EPSG:3857 is functionally equivalent to EPSG:900913/EPSG:3785)
 */
export declare enum GetMapSrsEnum {
    Epsg3857 = "EPSG:3857",
    Epsg4326 = "EPSG:4326"
}
/**
 * Map styles to be returned. Currently, no styles are available. This
 *
 * @remarks
 * parameter is present for forward compatibility; it must be used and
 * left blank.
 */
export declare enum GetMapStylesEnum {
    Unknown = ""
}
/**
 * WMS service version
 */
export declare enum GetMapVersionEnum {
    One11 = "1.1.1"
}
/**
 * Version of the service to call. The current version is 1
 */
export declare enum GetMapVersionNumberEnum {
    One = "1"
}
export declare class GetMapRequest extends SpeakeasyBase {
    /**
     * Bounding box in the projection stated in <b>srs</b>
     *
     * @remarks
     * (minLon,minLat,maxLon,maxLat)
     */
    bbox: string;
    /**
     * Image format to be returned
     */
    format: GetMapFormatEnum;
    /**
     * Height of the resulting image, in pixels Maximum value is 2048
     */
    height: number;
    /**
     * Map layers requested Currently only the basic layer is available
     */
    layers: GetMapLayersEnum;
    /**
     * Request type
     */
    request: GetMapRequestEnum;
    /**
     * Service type
     */
    service?: GetMapServiceEnum;
    /**
     * Projection used in describing the <b>bbox</b> EPSG:3857 is
     *
     * @remarks
     * recommended, particularly at higher zoom levels. (Note that
     * EPSG:3857 is functionally equivalent to EPSG:900913/EPSG:3785)
     */
    srs: GetMapSrsEnum;
    /**
     * Map styles to be returned. Currently, no styles are available. This
     *
     * @remarks
     * parameter is present for forward compatibility; it must be used and
     * left blank.
     */
    styles?: GetMapStylesEnum;
    /**
     * WMS service version
     */
    version: GetMapVersionEnum;
    /**
     * Version of the service to call. The current version is 1
     */
    versionNumber: GetMapVersionNumberEnum;
    /**
     * Width of the resulting image, in pixels Maximum value is 2048
     */
    width: number;
}
export declare class GetMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
