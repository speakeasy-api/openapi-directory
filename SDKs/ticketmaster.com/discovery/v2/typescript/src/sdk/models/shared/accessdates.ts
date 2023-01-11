import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessDates
/** 
 * Event's Access Date
**/
export class AccessDates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endApproximate?: boolean;

  @SpeakeasyMetadata()
  endDateTime?: Date;

  @SpeakeasyMetadata()
  startApproximate?: boolean;

  @SpeakeasyMetadata()
  startDateTime?: Date;
}
