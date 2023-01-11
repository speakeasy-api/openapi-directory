import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLabels400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostLabels401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LabelInput;
}


export class PostLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  label?: shared.Label;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postLabels400ApplicationJSONObject?: PostLabels400ApplicationJson;

  @SpeakeasyMetadata()
  postLabels401ApplicationJSONObject?: PostLabels401ApplicationJson;
}
