import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum {
    Main = "main"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    layer: GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum;
    style: GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum;
    versionNumber: number;
    zoom: number;
}
export declare enum GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum {
    Unified = "Unified",
    Il = "IL",
    In = "IN"
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams extends SpeakeasyBase {
    language?: string;
    view?: GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyPbfRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams;
    queryParams: GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams;
}
export declare class GetMapVersionNumberTileLayerStyleZoomXyPbfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
