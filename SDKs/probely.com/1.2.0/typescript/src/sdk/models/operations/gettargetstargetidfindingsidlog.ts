import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdFindingsIdLogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdFindingsIdLog401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsIdLog404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsIdLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdFindingsIdLogPathParams;
}


export class GetTargetsTargetIdFindingsIdLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Activity })
  activities?: shared.Activity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsIdLog401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdLog401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsIdLog404ApplicationJSONObject?: GetTargetsTargetIdFindingsIdLog404ApplicationJson;
}
