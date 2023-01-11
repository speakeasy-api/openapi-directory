import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionUpdateRequest
/** 
 * Collection update request
**/
export class CollectionUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
