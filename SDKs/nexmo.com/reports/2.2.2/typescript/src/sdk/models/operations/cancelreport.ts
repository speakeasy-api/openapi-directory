import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_id" })
  reportId: string;
}


export class CancelReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CancelReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelReportPathParams;

  @SpeakeasyMetadata()
  security: CancelReportSecurity;
}


export class CancelReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelReport200ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  cancelReport401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  cancelReport404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  cancelReport409ApplicationJSONAny?: any;
}
