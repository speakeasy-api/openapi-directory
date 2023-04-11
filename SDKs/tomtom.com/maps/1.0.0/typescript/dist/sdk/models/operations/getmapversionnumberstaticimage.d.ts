import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Image format to be returned
 */
export declare enum GetMapVersionNumberStaticimageFormatEnum {
    Png = "png",
    Jpg = "jpg",
    Jpeg = "jpeg"
}
/**
 * Layer of image to be rendered. <em>Hybrid</em> and <em>labels</em>
 *
 * @remarks
 * are intended for layering with other data and are only available in <em>png</em> format.
 */
export declare enum GetMapVersionNumberStaticimageLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
/**
 * Map style to be returned
 */
export declare enum GetMapVersionNumberStaticimageStyleEnum {
    Main = "main",
    Night = "night"
}
/**
 * Version of the service to call. The current version is 1.
 */
export declare enum GetMapVersionNumberStaticimageVersionNumberEnum {
    One = "1"
}
/**
 * Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-raster/raster-tile">documentation</a> for an explanation of how this works in live services.
 */
export declare enum GetMapVersionNumberStaticimageViewEnum {
    Unified = "Unified",
    In = "IN"
}
/**
 * Zoom level of map image to be returned.
 */
export declare enum GetMapVersionNumberStaticimageZoomEnum {
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
    Eighteen = "18",
    Nineteen = "19",
    Twenty = "20",
    TwentyOne = "21",
    TwentyTwo = "22"
}
export declare class GetMapVersionNumberStaticimageRequest extends SpeakeasyBase {
    /**
     * Bounding box for the image, using EPSG:3857 projection (functionally equivalent to EPSG:900910).
     *
     * @remarks
     * Values <strong>must</strong> be in the order of minLon, minLat, maxLon, maxLat.
     * MaxLat must be greater than minLat. Longitude values can be on both sides of the 180th meridian.
     * Cannot be used with <strong>center</strong>, <strong>width</strong>, or <strong>height</strong> parameters.
     */
    bbox?: string;
    /**
     * Coordinates for the center point of the image.
     *
     * @remarks
     * Must be used with the <strong>width</strong> and
     * <strong>height</strong> parameters; cannot be used with <strong>bbox</strong>.
     * Uses EPSG:3857 projection (functionally equivalent to EPSG:900910).
     */
    center?: string;
    /**
     * Image format to be returned
     */
    format?: GetMapVersionNumberStaticimageFormatEnum;
    /**
     * Height of the resulting image in pixels. Height must be a positive integer between 1 and 8192.
     */
    height?: number;
    /**
     * Layer of image to be rendered. <em>Hybrid</em> and <em>labels</em>
     *
     * @remarks
     * are intended for layering with other data and are only available in <em>png</em> format.
     */
    layer?: GetMapVersionNumberStaticimageLayerEnum;
    /**
     * Map style to be returned
     */
    style?: GetMapVersionNumberStaticimageStyleEnum;
    /**
     * Version of the service to call. The current version is 1.
     */
    versionNumber: GetMapVersionNumberStaticimageVersionNumberEnum;
    /**
     * Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-raster/raster-tile">documentation</a> for an explanation of how this works in live services.
     */
    view?: GetMapVersionNumberStaticimageViewEnum;
    /**
     * Width of the resulting image in pixels. Width must be a positive integer between 1 and 8192.
     */
    width?: number;
    /**
     * Zoom level of map image to be returned.
     */
    zoom?: GetMapVersionNumberStaticimageZoomEnum;
}
export declare class GetMapVersionNumberStaticimageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
