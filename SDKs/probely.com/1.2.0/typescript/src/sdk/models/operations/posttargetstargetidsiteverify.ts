import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdSiteVerifyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdSiteVerifyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: shared.VerificationTypeEnum;
}


export class PostTargetsTargetIdSiteVerify200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostTargetsTargetIdSiteVerify400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostTargetsTargetIdSiteVerify401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdSiteVerify403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdSiteVerify404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdSiteVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdSiteVerifyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostTargetsTargetIdSiteVerifyRequestBody;
}


export class PostTargetsTargetIdSiteVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdSiteVerify200ApplicationJSONObject?: PostTargetsTargetIdSiteVerify200ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdSiteVerify400ApplicationJSONObject?: PostTargetsTargetIdSiteVerify400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdSiteVerify401ApplicationJSONObject?: PostTargetsTargetIdSiteVerify401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdSiteVerify403ApplicationJSONObject?: PostTargetsTargetIdSiteVerify403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdSiteVerify404ApplicationJSONObject?: PostTargetsTargetIdSiteVerify404ApplicationJson;
}
