import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopTrackingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_code" })
  carrierCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tracking_number" })
  trackingNumber?: string;
}


export class StopTrackingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StopTrackingQueryParams;
}


export class StopTrackingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
