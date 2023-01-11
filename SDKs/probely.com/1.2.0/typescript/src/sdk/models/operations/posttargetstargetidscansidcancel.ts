import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdScansIdCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdScansIdCancel401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScansIdCancel403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScansIdCancel404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScansIdCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdScansIdCancelPathParams;
}


export class PostTargetsTargetIdScansIdCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scan?: shared.Scan;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdScansIdCancel401ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScansIdCancel403ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScansIdCancel404ApplicationJSONObject?: PostTargetsTargetIdScansIdCancel404ApplicationJson;
}
