import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisconnectCarrierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_id" })
  carrierId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrier_name" })
  carrierName: shared.CarrierNameEnum;
}


export class DisconnectCarrierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisconnectCarrierPathParams;
}


export class DisconnectCarrierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
