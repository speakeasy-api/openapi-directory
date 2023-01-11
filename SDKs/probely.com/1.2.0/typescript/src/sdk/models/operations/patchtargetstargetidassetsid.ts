import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdAssetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdAssetsId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchTargetsTargetIdAssetsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdAssetsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdAssetsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdAssetsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetInput;
}


export class PatchTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: shared.Asset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdAssetsId400ApplicationJSONObject?: PatchTargetsTargetIdAssetsId400ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdAssetsId401ApplicationJSONObject?: PatchTargetsTargetIdAssetsId401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdAssetsId403ApplicationJSONObject?: PatchTargetsTargetIdAssetsId403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdAssetsId404ApplicationJSONObject?: PatchTargetsTargetIdAssetsId404ApplicationJson;
}
