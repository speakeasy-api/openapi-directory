import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenreList
/** 
 * List of audio genres
**/
export class GenreList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string[];
}
