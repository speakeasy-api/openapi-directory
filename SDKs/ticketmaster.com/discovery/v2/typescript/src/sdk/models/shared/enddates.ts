import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";



// EndDates
/** 
 * Event's End Dates
**/
export class EndDates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approximate?: boolean;

  @SpeakeasyMetadata()
  dateTime?: Date;

  @SpeakeasyMetadata()
  localDate?: Date;

  @SpeakeasyMetadata()
  localTime?: LocalTime;

  @SpeakeasyMetadata()
  noSpecificTime?: boolean;
}
