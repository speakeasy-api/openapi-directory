import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Urls
/** 
 * List of URLs
**/
export class Urls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls: string[];
}
