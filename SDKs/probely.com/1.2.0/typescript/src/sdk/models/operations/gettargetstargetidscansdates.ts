import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdScansDatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScansDates401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansDates404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScansDatesPathParams;
}


export class GetTargetsTargetIdScansDatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansDates200ApplicationJSONDateStrings?: Date[];

  @SpeakeasyMetadata()
  getTargetsTargetIdScansDates401ApplicationJSONObject?: GetTargetsTargetIdScansDates401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansDates404ApplicationJSONObject?: GetTargetsTargetIdScansDates404ApplicationJson;
}
