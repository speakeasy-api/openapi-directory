import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionCreateRequest
/** 
 * Collection creation request
**/
export class CollectionCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
