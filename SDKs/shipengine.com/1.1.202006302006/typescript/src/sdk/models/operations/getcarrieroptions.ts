import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCarrierOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_id" })
  carrierId: string;
}


export class GetCarrierOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCarrierOptionsPathParams;
}


export class GetCarrierOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getCarrierOptionsResponseBody?: shared.GetCarrierOptionsResponseBody;
}
