import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoodList
/** 
 * List of audio moods
**/
export class MoodList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string[];
}
