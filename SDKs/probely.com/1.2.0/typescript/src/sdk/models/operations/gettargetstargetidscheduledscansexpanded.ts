import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdScheduledscansExpandedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScheduledscansExpandedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: number;
}


export class GetTargetsTargetIdScheduledscansExpanded200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Scheduled })
  results?: shared.Scheduled[];
}


export class GetTargetsTargetIdScheduledscansExpanded404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScheduledscansExpandedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScheduledscansExpandedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTargetsTargetIdScheduledscansExpandedQueryParams;
}


export class GetTargetsTargetIdScheduledscansExpandedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject?: GetTargetsTargetIdScheduledscansExpanded200ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject?: GetTargetsTargetIdScheduledscansExpanded404ApplicationJson;
}
