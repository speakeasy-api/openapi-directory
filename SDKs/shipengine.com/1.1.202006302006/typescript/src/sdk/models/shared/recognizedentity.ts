import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecognizedEntity
/** 
 * An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
 * 
**/
export class RecognizedEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_index" })
  endIndex: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=start_index" })
  startIndex: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
