import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdScansIdReportOwaspPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdScansIdReportOwasp401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReportOwasp404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdScansIdReportOwaspRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdScansIdReportOwaspPathParams;
}


export class GetTargetsTargetIdScansIdReportOwaspResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportOwasp200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportOwasp401ApplicationJSONObject?: GetTargetsTargetIdScansIdReportOwasp401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdScansIdReportOwasp404ApplicationJSONObject?: GetTargetsTargetIdScansIdReportOwasp404ApplicationJson;
}
