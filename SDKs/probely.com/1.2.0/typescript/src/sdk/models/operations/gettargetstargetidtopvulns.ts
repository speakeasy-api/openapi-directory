import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdTopVulnsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdTopVulns200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: string;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: string;
}


export class GetTargetsTargetIdTopVulnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdTopVulnsPathParams;
}


export class GetTargetsTargetIdTopVulnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetTargetsTargetIdTopVulns200ApplicationJson })
  getTargetsTargetIdTopVulns200ApplicationJSONObjects?: GetTargetsTargetIdTopVulns200ApplicationJson[];
}
