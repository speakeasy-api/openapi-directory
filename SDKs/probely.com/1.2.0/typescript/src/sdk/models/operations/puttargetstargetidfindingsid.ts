import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdFindingsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdFindingsId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutTargetsTargetIdFindingsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdFindingsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FindingUpdateInput;
}


export class PutTargetsTargetIdFindingsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  finding?: shared.Finding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsId400ApplicationJSONObject?: PutTargetsTargetIdFindingsId400ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsId401ApplicationJSONObject?: PutTargetsTargetIdFindingsId401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsId403ApplicationJSONObject?: PutTargetsTargetIdFindingsId403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsId404ApplicationJSONObject?: PutTargetsTargetIdFindingsId404ApplicationJson;
}
