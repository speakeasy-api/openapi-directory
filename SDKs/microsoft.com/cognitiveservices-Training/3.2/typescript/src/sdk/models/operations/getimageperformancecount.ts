import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagePerformanceCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImagePerformanceCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];
}


export class GetImagePerformanceCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagePerformanceCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImagePerformanceCountQueryParams;
}


export class GetImagePerformanceCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  getImagePerformanceCount200ApplicationJSONInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
