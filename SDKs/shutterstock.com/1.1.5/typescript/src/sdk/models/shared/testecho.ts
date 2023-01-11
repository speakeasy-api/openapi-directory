import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestEcho
/** 
 * Text to echo in the response
**/
export class TestEcho extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
