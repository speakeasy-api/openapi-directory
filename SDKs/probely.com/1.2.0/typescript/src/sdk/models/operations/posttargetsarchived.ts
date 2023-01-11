import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsArchived200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_total" })
  pageTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=pagination_count" })
  paginationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Target })
  results?: shared.Target[];
}


export class PostTargetsArchived400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargetsArchived401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsArchived403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsArchivedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PostTargetsArchivedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsArchived200ApplicationJSONObject?: PostTargetsArchived200ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsArchived400ApplicationJSONObject?: PostTargetsArchived400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsArchived401ApplicationJSONObject?: PostTargetsArchived401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsArchived403ApplicationJSONObject?: PostTargetsArchived403ApplicationJson;
}
