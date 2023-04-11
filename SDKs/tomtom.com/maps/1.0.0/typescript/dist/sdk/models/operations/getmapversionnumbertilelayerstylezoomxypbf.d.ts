import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Layer of tile to be rendered
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
/**
 * Style of tile to be rendered
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum {
    Main = "main"
}
/**
 * Version of the service to call. The current version is 1
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfVersionNumberEnum {
    One = "1"
}
/**
 * Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for an explanation of how this works in live services.
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum {
    Unified = "Unified",
    Il = "IL",
    In = "IN"
}
/**
 * Zoom level of tile to be rendered
 */
export declare enum GetMapVersionNumberTileLayerStyleZoomXYPbfZoomEnum {
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
export declare class GetMapVersionNumberTileLayerStyleZoomXYPbfRequest extends SpeakeasyBase {
    /**
     * x coordinate of tile on zoom grid
     */
    x: number;
    /**
     * y coordinate of tile on zoom grid
     */
    y: number;
    /**
     * Language to be used for labels in the response. The default is NGT: Neutral Ground Truth, which uses each place's local official language and script (where available). See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for a full list of options.
     */
    language?: string;
    /**
     * Layer of tile to be rendered
     */
    layer: GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum;
    /**
     * Style of tile to be rendered
     */
    style: GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum;
    /**
     * Version of the service to call. The current version is 1
     */
    versionNumber: GetMapVersionNumberTileLayerStyleZoomXYPbfVersionNumberEnum;
    /**
     * Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for an explanation of how this works in live services.
     */
    view?: GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum;
    /**
     * Zoom level of tile to be rendered
     */
    zoom: GetMapVersionNumberTileLayerStyleZoomXYPbfZoomEnum;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXYPbfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
