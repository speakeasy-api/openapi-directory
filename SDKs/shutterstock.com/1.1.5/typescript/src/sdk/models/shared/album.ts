import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Album
/** 
 * Album metadata
**/
export class Album extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
