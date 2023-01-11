import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdSite400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchTargetsTargetIdSite401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdSite403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdSite404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdSitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SiteInput;
}


export class PatchTargetsTargetIdSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  site?: shared.Site;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdSite400ApplicationJSONObject?: PatchTargetsTargetIdSite400ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdSite401ApplicationJSONObject?: PatchTargetsTargetIdSite401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdSite403ApplicationJSONObject?: PatchTargetsTargetIdSite403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdSite404ApplicationJSONObject?: PatchTargetsTargetIdSite404ApplicationJson;
}
