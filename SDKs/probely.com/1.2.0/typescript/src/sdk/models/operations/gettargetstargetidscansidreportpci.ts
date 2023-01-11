import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdScansIdReportPciPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScansIdReportPci401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReportPci404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReportPciRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScansIdReportPciPathParams;
}


export class GetTargetsTargetIdScansIdReportPciResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportPci200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportPci401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportPci401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportPci404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportPci404ApplicationJson;
}
