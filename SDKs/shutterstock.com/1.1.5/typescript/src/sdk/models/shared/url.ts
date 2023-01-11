import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Url
/** 
 * URL object
**/
export class Url extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
