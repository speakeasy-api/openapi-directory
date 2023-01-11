import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdScansIdEndpointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScansIdEndpoints401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdEndpoints404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScansIdEndpointsPathParams;
}


export class GetTargetsTargetIdScansIdEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdEndpoints200ApplicationCsvBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdEndpoints401ApplicationJSONObject?: GetTargetsTargetIdScansIdEndpoints401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdEndpoints404ApplicationJSONObject?: GetTargetsTargetIdScansIdEndpoints404ApplicationJson;
}
