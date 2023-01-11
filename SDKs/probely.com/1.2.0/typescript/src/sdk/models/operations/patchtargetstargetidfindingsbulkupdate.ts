import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdFindingsBulkUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdFindingsBulkUpdate400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchTargetsTargetIdFindingsBulkUpdate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsBulkUpdate404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsBulkUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdFindingsBulkUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FindingBulkUpdateInput;
}


export class PatchTargetsTargetIdFindingsBulkUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsBulkUpdate400ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate400ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsBulkUpdate401ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsBulkUpdate404ApplicationJSONObject?: PatchTargetsTargetIdFindingsBulkUpdate404ApplicationJson;
}
