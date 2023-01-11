import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTargetsArchive400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargetsArchive401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsArchive403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PostTargetsArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsArchive400ApplicationJSONObject?: PostTargetsArchive400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsArchive401ApplicationJSONObject?: PostTargetsArchive401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsArchive403ApplicationJSONObject?: PostTargetsArchive403ApplicationJson;

  @SpeakeasyMetadata()
  targetIds?: string[];
}
