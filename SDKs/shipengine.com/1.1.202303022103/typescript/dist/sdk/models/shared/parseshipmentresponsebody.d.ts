import { SpeakeasyBase } from "../../../internal/utils";
import { PartialShipment } from "./partialshipment";
import { RecognizedEntity } from "./recognizedentity";
/**
 * The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
 *
 * @remarks
 *
 */
export declare class ParseShipmentResponseBody extends SpeakeasyBase {
    /**
     * All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, a carrier name, or a package weight.  Each entity includes the original text and the parsed value.
     *
     * @remarks
     *
     */
    entities: RecognizedEntity[];
    /**
     * A confidence score between zero and one that indicates how certain the API is that it understood the text.
     *
     * @remarks
     *
     */
    score: number;
    /**
     * The parsed shipment.  This shipment may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.
     *
     * @remarks
     *
     * > **Note:** The shipment-recognition API does not currently perform any validation of the parsed addresses, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the addresses are correct.
     *
     */
    shipment: PartialShipment;
}
