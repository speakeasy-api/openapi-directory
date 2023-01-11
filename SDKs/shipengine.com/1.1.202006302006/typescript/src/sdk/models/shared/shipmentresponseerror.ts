import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShipmentResponseError
/** 
 * A shipment response error.
**/
export class ShipmentResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: string;

  @SpeakeasyMetadata({ data: "json, name=external_shipment_id" })
  externalShipmentId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=shipment_id" })
  shipmentId: Record<string, any>;
}
