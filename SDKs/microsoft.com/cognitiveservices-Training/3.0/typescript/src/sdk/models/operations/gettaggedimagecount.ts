import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTaggedImageCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetTaggedImageCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];
}


export class GetTaggedImageCountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetTaggedImageCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaggedImageCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTaggedImageCountQueryParams;

  @SpeakeasyMetadata()
  headers: GetTaggedImageCountHeaders;
}


export class GetTaggedImageCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  getTaggedImageCount200ApplicationJSONInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
