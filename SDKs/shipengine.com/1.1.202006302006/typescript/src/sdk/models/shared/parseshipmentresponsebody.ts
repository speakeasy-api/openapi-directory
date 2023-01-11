import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecognizedEntity } from "./recognizedentity";
import { PartialShipment } from "./partialshipment";



// ParseShipmentResponseBody
/** 
 * The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
 * 
**/
export class ParseShipmentResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: RecognizedEntity })
  entities: RecognizedEntity[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=shipment" })
  shipment: PartialShipment;
}
