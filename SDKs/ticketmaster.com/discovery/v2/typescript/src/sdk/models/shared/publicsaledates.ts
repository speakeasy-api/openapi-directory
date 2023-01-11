import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicSaleDates
/** 
 * Event's Public Onsales Dates
**/
export class PublicSaleDates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endDateTime?: Date;

  @SpeakeasyMetadata()
  startDateTime?: Date;

  @SpeakeasyMetadata()
  startTBD?: boolean;
}
