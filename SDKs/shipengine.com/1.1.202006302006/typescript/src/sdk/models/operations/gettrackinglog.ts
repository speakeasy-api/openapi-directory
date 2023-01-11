import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrackingLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_code" })
  carrierCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tracking_number" })
  trackingNumber?: string;
}


export class GetTrackingLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTrackingLogQueryParams;
}


export class GetTrackingLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getTrackingLogResponseBody?: shared.GetTrackingLogResponseBody;
}
