import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdAssetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdAssets400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargetsTargetIdAssets401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdAssets403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdAssets404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdAssetsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetInput;
}


export class PostTargetsTargetIdAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: shared.Asset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssets400ApplicationJSONObject?: PostTargetsTargetIdAssets400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssets401ApplicationJSONObject?: PostTargetsTargetIdAssets401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssets403ApplicationJSONObject?: PostTargetsTargetIdAssets403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdAssets404ApplicationJSONObject?: PostTargetsTargetIdAssets404ApplicationJson;
}
