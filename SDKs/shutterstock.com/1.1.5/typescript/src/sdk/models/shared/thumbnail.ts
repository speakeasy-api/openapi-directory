import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Thumbnail
/** 
 * Image thumbnail information
**/
export class Thumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}
