import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchEntitiesRequest
/** 
 * Search entity request data
**/
export class SearchEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
