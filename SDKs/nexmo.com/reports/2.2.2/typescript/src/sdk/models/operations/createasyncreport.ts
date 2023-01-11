import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAsyncReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateAsyncReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: CreateAsyncReportSecurity;
}


export class CreateAsyncReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAsyncReport200ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  createAsyncReport400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createAsyncReport401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createAsyncReport403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createAsyncReport422ApplicationJSONAny?: any;
}
