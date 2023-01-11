import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagShipmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_name" })
  tagName: string;
}


export class TagShipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagShipmentPathParams;
}


export class TagShipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  tagShipmentResponseBody?: shared.TagShipmentResponseBody;
}
