import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Preview } from "./preview";



// Instrument
/** 
 * Information about an musical instrument
**/
export class Instrument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=previews", elemType: Preview })
  previews?: Preview[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
