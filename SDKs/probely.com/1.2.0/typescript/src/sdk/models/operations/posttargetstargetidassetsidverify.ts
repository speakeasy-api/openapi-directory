import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdAssetsIdVerifyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdAssetsIdVerifyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: shared.VerificationTypeEnum;
}


export class PostTargetsTargetIdAssetsIdVerify200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostTargetsTargetIdAssetsIdVerify400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostTargetsTargetIdAssetsIdVerify401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdAssetsIdVerify403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdAssetsIdVerify404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdAssetsIdVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdAssetsIdVerifyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostTargetsTargetIdAssetsIdVerifyRequestBody;
}


export class PostTargetsTargetIdAssetsIdVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssetsIdVerify200ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify200ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssetsIdVerify400ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssetsIdVerify401ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssetsIdVerify403ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssetsIdVerify404ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify404ApplicationJson;
}
