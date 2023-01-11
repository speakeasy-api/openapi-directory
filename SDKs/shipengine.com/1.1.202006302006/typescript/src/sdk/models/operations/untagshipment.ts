import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UntagShipmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_name" })
  tagName: string;
}


export class UntagShipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UntagShipmentPathParams;
}


export class UntagShipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
