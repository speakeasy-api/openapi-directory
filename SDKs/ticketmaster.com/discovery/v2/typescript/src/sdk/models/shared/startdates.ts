import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";



// StartDates
/** 
 * Event's Start Dates
**/
export class StartDates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dateTBA?: boolean;

  @SpeakeasyMetadata()
  dateTBD?: boolean;

  @SpeakeasyMetadata()
  dateTime?: Date;

  @SpeakeasyMetadata()
  localDate?: Date;

  @SpeakeasyMetadata()
  localTime?: LocalTime;

  @SpeakeasyMetadata()
  noSpecificTime?: boolean;

  @SpeakeasyMetadata()
  timeTBA?: boolean;
}
