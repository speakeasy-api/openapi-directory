import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdSite400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutTargetsTargetIdSite401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdSite403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdSite404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdSitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SiteInput;
}


export class PutTargetsTargetIdSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  site?: shared.Site;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdSite400ApplicationJSONObject?: PutTargetsTargetIdSite400ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdSite401ApplicationJSONObject?: PutTargetsTargetIdSite401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdSite403ApplicationJSONObject?: PutTargetsTargetIdSite403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdSite404ApplicationJSONObject?: PutTargetsTargetIdSite404ApplicationJson;
}
