import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Contributor
/** 
 * Information about a contributor
**/
export class Contributor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
