import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailableApiVersion
/** 
 * A JSON object containing information about an available API version
**/
export class AvailableApiVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
