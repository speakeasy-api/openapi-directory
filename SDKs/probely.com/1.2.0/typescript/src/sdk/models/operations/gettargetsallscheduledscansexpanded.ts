import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsAllScheduledscansExpandedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: number;
}


export class GetTargetsAllScheduledscansExpanded200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Scheduled })
  results?: shared.Scheduled[];
}


export class GetTargetsAllScheduledscansExpanded404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsAllScheduledscansExpandedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTargetsAllScheduledscansExpandedQueryParams;
}


export class GetTargetsAllScheduledscansExpandedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsAllScheduledscansExpanded200ApplicationJSONObject?: GetTargetsAllScheduledscansExpanded200ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsAllScheduledscansExpanded404ApplicationJSONObject?: GetTargetsAllScheduledscansExpanded404ApplicationJson;
}
