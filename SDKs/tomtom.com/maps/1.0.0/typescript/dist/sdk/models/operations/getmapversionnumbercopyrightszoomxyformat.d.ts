import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Format of the response
 */
export declare enum GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
/**
 * Version of the service to call. The current version is 1
 */
export declare enum GetMapVersionNumberCopyrightsZoomXYFormatVersionNumberEnum {
    One = "1"
}
/**
 * Zoom level of tile to be rendered. Only used for tile-level
 *
 * @remarks
 * copyright calls.
 */
export declare enum GetMapVersionNumberCopyrightsZoomXYFormatZoomEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    Fifteen = "15",
    Sixteen = "16",
    Seventeen = "17",
    Eighteen = "18"
}
export declare class GetMapVersionNumberCopyrightsZoomXYFormatRequest extends SpeakeasyBase {
    /**
     * X coordinate of the tile on zoom grid. Only used for tile-level
     *
     * @remarks
     * copyright calls.
     */
    x: number;
    /**
     * Y coordinate of the tile on zoom grid. Only used for tile-level
     *
     * @remarks
     * copyright calls.
     */
    y: number;
    /**
     * Specifies the jsonp callback method. Only used when format is jsonp.
     */
    callback?: string;
    /**
     * Format of the response
     */
    format: GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum;
    /**
     * Version of the service to call. The current version is 1
     */
    versionNumber: GetMapVersionNumberCopyrightsZoomXYFormatVersionNumberEnum;
    /**
     * Zoom level of tile to be rendered. Only used for tile-level
     *
     * @remarks
     * copyright calls.
     */
    zoom: GetMapVersionNumberCopyrightsZoomXYFormatZoomEnum;
}
export declare class GetMapVersionNumberCopyrightsZoomXYFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
