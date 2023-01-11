import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum {
    Jpg = "jpg",
    Png = "png"
}

export enum GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}

export enum GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum {
    Main = "main",
    Night = "night"
}


export class GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberTileLayerStyleZoomXyFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layer" })
  layer: GetMapVersionNumberTileLayerStyleZoomXyFormatLayerEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style" })
  style: GetMapVersionNumberTileLayerStyleZoomXyFormatStyleEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}

export enum GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum {
    Unified = "Unified",
    In = "IN"
}


export class GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tileSize" })
  tileSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberTileLayerStyleZoomXyFormatViewEnum;
}


export class GetMapVersionNumberTileLayerStyleZoomXyFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberTileLayerStyleZoomXyFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberTileLayerStyleZoomXyFormatQueryParams;
}


export class GetMapVersionNumberTileLayerStyleZoomXyFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
