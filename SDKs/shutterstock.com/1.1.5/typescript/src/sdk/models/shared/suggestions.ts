import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Suggestions
/** 
 * List of search suggestions
**/
export class Suggestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];
}
