import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUntaggedImageCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetUntaggedImageCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class GetUntaggedImageCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUntaggedImageCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUntaggedImageCountQueryParams;
}


export class GetUntaggedImageCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  getUntaggedImageCount200ApplicationJSONInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
