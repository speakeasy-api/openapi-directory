import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLabelsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLabelsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetLabelsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetLabelsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLabelsIdPathParams;
}


export class GetLabelsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: shared.Label;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLabelsId401ApplicationJSONObject?: GetLabelsId401ApplicationJson;

  @SpeakeasyMetadata()
  getLabelsId404ApplicationJSONObject?: GetLabelsId404ApplicationJson;
}
