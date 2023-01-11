import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFundsToCarrierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_id" })
  carrierId: string;
}


export class AddFundsToCarrierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddFundsToCarrierPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddFundsToCarrierRequestBody;
}


export class AddFundsToCarrierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addFundsToCarrierResponseBody?: shared.AddFundsToCarrierResponseBody;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
