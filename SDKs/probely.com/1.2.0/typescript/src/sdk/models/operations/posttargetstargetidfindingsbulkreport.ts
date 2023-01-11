import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdFindingsBulkReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdFindingsBulkReport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostTargetsTargetIdFindingsBulkReport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdFindingsBulkReport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdFindingsBulkReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdFindingsBulkReportPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FindingBulkIds;
}


export class PostTargetsTargetIdFindingsBulkReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsBulkReport400ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsBulkReport401ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsBulkReport404ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkReport404ApplicationJson;
}
