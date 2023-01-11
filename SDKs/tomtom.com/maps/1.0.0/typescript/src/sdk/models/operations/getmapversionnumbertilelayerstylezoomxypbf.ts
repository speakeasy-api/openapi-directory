import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}

export enum GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum {
    Main = "main"
}


export class GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layer" })
  layer: GetMapVersionNumberTileLayerStyleZoomXyPbfLayerEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style" })
  style: GetMapVersionNumberTileLayerStyleZoomXyPbfStyleEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}

export enum GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum {
    Unified = "Unified",
    Il = "IL",
    In = "IN"
}


export class GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetMapVersionNumberTileLayerStyleZoomXyPbfViewEnum;
}


export class GetMapVersionNumberTileLayerStyleZoomXyPbfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberTileLayerStyleZoomXyPbfPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberTileLayerStyleZoomXyPbfQueryParams;
}


export class GetMapVersionNumberTileLayerStyleZoomXyPbfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
