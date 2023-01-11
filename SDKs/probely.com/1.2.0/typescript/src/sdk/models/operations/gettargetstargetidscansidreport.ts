import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdScansIdReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScansIdReport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScansIdReportPathParams;
}


export class GetTargetsTargetIdScansIdReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReport200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReport401ApplicationJSONObject?: GetTargetsTargetIdScansIdReport401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReport404ApplicationJSONObject?: GetTargetsTargetIdScansIdReport404ApplicationJson;
}
