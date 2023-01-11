import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessDates } from "./accessdates";
import { EndDates } from "./enddates";
import { StartDates } from "./startdates";
import { EventStatus } from "./eventstatus";



// EventDates
/** 
 * Event's Dates
**/
export class EventDates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  access?: AccessDates;

  @SpeakeasyMetadata()
  end?: EndDates;

  @SpeakeasyMetadata()
  spanMultipleDays?: boolean;

  @SpeakeasyMetadata()
  start?: StartDates;

  @SpeakeasyMetadata()
  status?: EventStatus;

  @SpeakeasyMetadata()
  timezone?: string;
}
