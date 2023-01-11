import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum {
    Jpg = "jpg",
    Png = "png"
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum {
    Main = "main",
    Night = "night"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    format: GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum;
    layer: GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum;
    style: GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum;
    versionNumber: number;
    zoom: number;
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum {
    Unified = "Unified",
    In = "IN"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams extends SpeakeasyBase {
    tileSize?: number;
    view?: GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyFormatRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams;
    queryParams: GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
