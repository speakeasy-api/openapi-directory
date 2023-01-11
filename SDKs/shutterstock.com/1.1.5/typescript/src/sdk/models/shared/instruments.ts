import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Instruments
/** 
 * Instruments
**/
export class Instruments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
