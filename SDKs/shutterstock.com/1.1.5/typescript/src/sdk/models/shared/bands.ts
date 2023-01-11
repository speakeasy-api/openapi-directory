import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Bands
/** 
 * A band that can be used to generate music
**/
export class Bands extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
