import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdScansIdReportDefaultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScansIdReportDefault401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReportDefault404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReportDefaultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScansIdReportDefaultPathParams;
}


export class GetTargetsTargetIdScansIdReportDefaultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportDefault200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportDefault401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportDefault401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportDefault404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportDefault404ApplicationJson;
}
