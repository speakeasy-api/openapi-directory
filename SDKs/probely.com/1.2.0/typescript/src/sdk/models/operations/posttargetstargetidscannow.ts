import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdScanNowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}

export enum PostTargetsTargetIdScanNowRequestBodyScanProfileEnum {
    Safe = "safe",
    Normal = "normal",
    Full = "full",
    Lightning = "lightning"
}


export class PostTargetsTargetIdScanNowRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scan_profile" })
  scanProfile?: PostTargetsTargetIdScanNowRequestBodyScanProfileEnum;
}


export class PostTargetsTargetIdScanNow400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostTargetsTargetIdScanNow401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScanNow403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScanNow404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScanNowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdScanNowPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTargetsTargetIdScanNowRequestBody;
}


export class PostTargetsTargetIdScanNowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scan?: shared.Scan;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdScanNow400ApplicationJSONObject?: PostTargetsTargetIdScanNow400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScanNow401ApplicationJSONObject?: PostTargetsTargetIdScanNow401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScanNow403ApplicationJSONObject?: PostTargetsTargetIdScanNow403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScanNow404ApplicationJSONObject?: PostTargetsTargetIdScanNow404ApplicationJson;
}
