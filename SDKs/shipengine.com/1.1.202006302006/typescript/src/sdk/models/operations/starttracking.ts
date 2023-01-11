import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartTrackingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_code" })
  carrierCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tracking_number" })
  trackingNumber?: string;
}


export class StartTrackingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StartTrackingQueryParams;
}


export class StartTrackingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
