import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Artist
/** 
 * Metadata about the artist that created the media
**/
export class Artist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
