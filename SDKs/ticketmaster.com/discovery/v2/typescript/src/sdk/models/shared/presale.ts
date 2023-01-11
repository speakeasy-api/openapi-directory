import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Presale
/** 
 * Event's Presale Info
**/
export class Presale extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  endDateTime?: Date;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  startDateTime?: Date;

  @SpeakeasyMetadata()
  url?: string;
}
