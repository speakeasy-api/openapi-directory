import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Format of the response.
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum {
    Jpg = "jpg",
    Png = "png"
}
/**
 * Layer of tile to be rendered. <em>Hybrid</em> and <em>labels</em> are intended for layering with other data and are only available in <em>png</em> format.
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
/**
 * Style of tile to be rendered
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum {
    Main = "main",
    Night = "night"
}
/**
 * Tile dimensions in pixels. <em>512</em> is only available for the <em>main</em> style and <em>basic</em> or <em>labels</em> layers.
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatTileSizeEnum {
    TwoHundredAndFiftySix = "256",
    FiveHundredAndTwelve = "512"
}
/**
 * Version of the service to call. The current version is 1.
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatVersionNumberEnum {
    One = "1"
}
/**
 * Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-sdk-web/functional-examples#geopolitical-views">documentation</a> for an explanation of how this works in live services.
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum {
    Unified = "Unified",
    In = "IN"
}
/**
 * Zoom level of tile to be rendered
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYFormatZoomEnum {
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
export declare class GetMapVersionNumberTileLayerStyleZoomXYFormatRequest extends SpeakeasyBase {
    /**
     * x coordinate of tile on zoom grid
     */
    x: number;
    /**
     * y coordinate of tile on zoom grid
     */
    y: number;
    /**
     * Format of the response.
     */
    format: GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum;
    /**
     * Layer of tile to be rendered. <em>Hybrid</em> and <em>labels</em> are intended for layering with other data and are only available in <em>png</em> format.
     */
    layer: GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum;
    /**
     * Style of tile to be rendered
     */
    style: GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum;
    /**
     * Tile dimensions in pixels. <em>512</em> is only available for the <em>main</em> style and <em>basic</em> or <em>labels</em> layers.
     */
    tileSize?: GetMapVersionNumberTileLayerStyleZoomXYFormatTileSizeEnum;
    /**
     * Version of the service to call. The current version is 1.
     */
    versionNumber: GetMapVersionNumberTileLayerStyleZoomXYFormatVersionNumberEnum;
    /**
     * Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-sdk-web/functional-examples#geopolitical-views">documentation</a> for an explanation of how this works in live services.
     */
    view?: GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum;
    /**
     * Zoom level of tile to be rendered
     */
    zoom: GetMapVersionNumberTileLayerStyleZoomXYFormatZoomEnum;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
