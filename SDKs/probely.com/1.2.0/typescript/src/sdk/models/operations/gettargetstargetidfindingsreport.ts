import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdFindingsReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdFindingsReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetTargetsTargetIdFindingsReport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class GetTargetsTargetIdFindingsReport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsReport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdFindingsReportPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTargetsTargetIdFindingsReportQueryParams;
}


export class GetTargetsTargetIdFindingsReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsReport200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsReport400ApplicationJSONObject?: GetTargetsTargetIdFindingsReport400ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsReport401ApplicationJSONObject?: GetTargetsTargetIdFindingsReport401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsReport404ApplicationJSONObject?: GetTargetsTargetIdFindingsReport404ApplicationJson;
}
