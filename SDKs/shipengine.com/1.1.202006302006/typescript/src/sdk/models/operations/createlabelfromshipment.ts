import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLabelFromShipmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;
}


export class CreateLabelFromShipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateLabelFromShipmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateLabelFromShipmentRequestBody;
}


export class CreateLabelFromShipmentResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createLabelFromShipmentResponseBody?: shared.CreateLabelFromShipmentResponseBodyOutput;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
