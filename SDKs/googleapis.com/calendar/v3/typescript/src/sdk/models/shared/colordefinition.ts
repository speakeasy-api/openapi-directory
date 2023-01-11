import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ColorDefinition
/** 
 * A calendar color definition.
**/
export class ColorDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background" })
  background?: string;

  @SpeakeasyMetadata({ data: "json, name=foreground" })
  foreground?: string;
}
