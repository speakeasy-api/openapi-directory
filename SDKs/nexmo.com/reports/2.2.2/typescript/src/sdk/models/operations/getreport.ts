import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_id" })
  reportId: string;
}


export class GetReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportPathParams;

  @SpeakeasyMetadata()
  security: GetReportSecurity;
}


export class GetReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getReport200ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  getReport401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getReport404ApplicationJSONAny?: any;
}
