import { SpeakeasyBase } from "../../../internal/utils";
import { PartialAddress } from "./partialaddress";
import { RecognizedEntity } from "./recognizedentity";
/**
 * The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
 *
**/
export declare class ParseAddressResponseBody extends SpeakeasyBase {
    address: PartialAddress;
    entities: RecognizedEntity[];
    score: number;
}
