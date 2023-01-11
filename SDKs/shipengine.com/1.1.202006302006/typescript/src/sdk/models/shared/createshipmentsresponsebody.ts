import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAndValidateShipment } from "./createandvalidateshipment";



// CreateShipmentsResponseBody
/** 
 * A create shipments response body
**/
export class CreateShipmentsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has_errors" })
  hasErrors: boolean;

  @SpeakeasyMetadata({ data: "json, name=shipments", elemType: CreateAndValidateShipment })
  shipments: CreateAndValidateShipment[];
}
