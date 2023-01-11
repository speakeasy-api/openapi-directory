import { SpeakeasyBase } from "../../../internal/utils";
import { RecognizedEntity } from "./recognizedentity";
import { PartialShipment } from "./partialshipment";
/**
 * The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
 *
**/
export declare class ParseShipmentResponseBody extends SpeakeasyBase {
    entities: RecognizedEntity[];
    score: number;
    shipment: PartialShipment;
}
