import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressValidatingShipmentInput } from "./addressvalidatingshipment";



// CreateShipmentsRequestBodyInput
/** 
 * A create shipments request body
**/
export class CreateShipmentsRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipments", elemType: AddressValidatingShipmentInput })
  shipments: AddressValidatingShipmentInput[];
}
