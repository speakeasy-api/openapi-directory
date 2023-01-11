import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsZoomXyFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}


export class GetMapVersionNumberCopyrightsZoomXyFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsZoomXyFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberCopyrightsZoomXyFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberCopyrightsZoomXyFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsZoomXyFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
