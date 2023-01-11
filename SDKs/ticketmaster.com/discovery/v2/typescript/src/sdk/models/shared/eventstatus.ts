import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EventStatusCodeEnum {
    Onsale = "onsale",
    Offsale = "offsale",
    Canceled = "canceled",
    Postponed = "postponed",
    Rescheduled = "rescheduled"
}


// EventStatus
/** 
 * Event's Status
**/
export class EventStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: EventStatusCodeEnum;
}
