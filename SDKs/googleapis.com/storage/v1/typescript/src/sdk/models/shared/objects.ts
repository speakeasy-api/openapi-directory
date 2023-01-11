import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectT } from "./object";



// Objects
/** 
 * A list of objects.
**/
export class Objects extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ObjectT })
  items?: ObjectT[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=prefixes" })
  prefixes?: string[];
}
