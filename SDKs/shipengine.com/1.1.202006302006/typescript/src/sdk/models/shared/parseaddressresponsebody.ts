import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartialAddress } from "./partialaddress";
import { RecognizedEntity } from "./recognizedentity";



// ParseAddressResponseBody
/** 
 * The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
 * 
**/
export class ParseAddressResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: PartialAddress;

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: RecognizedEntity })
  entities: RecognizedEntity[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;
}
