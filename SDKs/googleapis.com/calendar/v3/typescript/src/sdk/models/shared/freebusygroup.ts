import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";



// FreeBusyGroup
/** 
 * List of calendars that are members of this group.
**/
export class FreeBusyGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendars" })
  calendars?: string[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];
}
