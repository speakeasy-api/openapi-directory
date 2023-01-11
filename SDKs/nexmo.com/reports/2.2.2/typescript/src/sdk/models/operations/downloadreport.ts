import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class DownloadReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DownloadReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadReportPathParams;

  @SpeakeasyMetadata()
  security: DownloadReportSecurity;
}


export class DownloadReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadReport401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  downloadReport404ApplicationJSONAny?: any;
}
