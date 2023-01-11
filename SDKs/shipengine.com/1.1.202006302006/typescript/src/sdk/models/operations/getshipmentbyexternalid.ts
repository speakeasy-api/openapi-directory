import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShipmentByExternalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_shipment_id" })
  externalShipmentId: string;
}


export class GetShipmentByExternalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShipmentByExternalIdPathParams;
}


export class GetShipmentByExternalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getShipmentByExternalIdResponseBody?: shared.GetShipmentByExternalIdResponseBody;
}
