import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutLabelsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutLabelsId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutLabelsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutLabelsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutLabelsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutLabelsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LabelInput;
}


export class PutLabelsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: shared.Label;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putLabelsId400ApplicationJSONObject?: PutLabelsId400ApplicationJson;

  @SpeakeasyMetadata()
  putLabelsId401ApplicationJSONObject?: PutLabelsId401ApplicationJson;

  @SpeakeasyMetadata()
  putLabelsId404ApplicationJSONObject?: PutLabelsId404ApplicationJson;
}
