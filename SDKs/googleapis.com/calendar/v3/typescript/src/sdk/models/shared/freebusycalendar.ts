import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
import { ErrorT } from "./error";



// FreeBusyCalendar
/** 
 * Free/busy expansions for a single calendar.
**/
export class FreeBusyCalendar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=busy", elemType: TimePeriod })
  busy?: TimePeriod[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];
}
