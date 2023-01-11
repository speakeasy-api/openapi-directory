import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartialShipmentInput } from "./partialshipment";



// ParseShipmentRequestBodyInput
/** 
 * The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
 * 
**/
export class ParseShipmentRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipment" })
  shipment?: PartialShipmentInput;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
