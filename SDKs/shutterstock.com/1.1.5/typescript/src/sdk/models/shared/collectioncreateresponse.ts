import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionCreateResponse
/** 
 * Collection creation response
**/
export class CollectionCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
