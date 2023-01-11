import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdFindingsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdFindingsId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchTargetsTargetIdFindingsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdFindingsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FindingUpdateInput;
}


export class PatchTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  finding?: shared.Finding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsId400ApplicationJSONObject?: PatchTargetsTargetIdFindingsId400ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsId401ApplicationJSONObject?: PatchTargetsTargetIdFindingsId401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsId403ApplicationJSONObject?: PatchTargetsTargetIdFindingsId403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdFindingsId404ApplicationJSONObject?: PatchTargetsTargetIdFindingsId404ApplicationJson;
}
