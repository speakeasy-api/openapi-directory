import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShipmentByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;
}


export class GetShipmentByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShipmentByIdPathParams;
}


export class GetShipmentByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getShipmentByIdResponseBody?: shared.GetShipmentByIdResponseBody;
}
