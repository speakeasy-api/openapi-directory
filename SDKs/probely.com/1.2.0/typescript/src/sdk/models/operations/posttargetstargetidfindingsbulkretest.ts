import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdFindingsBulkRetestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdFindingsBulkRetest400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostTargetsTargetIdFindingsBulkRetest401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdFindingsBulkRetest404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdFindingsBulkRetestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdFindingsBulkRetestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FindingBulkRetest;
}


export class PostTargetsTargetIdFindingsBulkRetestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsBulkRetest400ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsBulkRetest401ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdFindingsBulkRetest404ApplicationJSONObject?: PostTargetsTargetIdFindingsBulkRetest404ApplicationJson;
}
