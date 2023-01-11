import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateShipmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;
}


export class UpdateShipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateShipmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateShipmentRequestBodyInput;
}


export class UpdateShipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  updateShipmentResponseBody?: shared.UpdateShipmentResponseBody;
}
