import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Model
/** 
 * Information about a human model or property that appears in media; used to search for assets that this model is in
**/
export class Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
