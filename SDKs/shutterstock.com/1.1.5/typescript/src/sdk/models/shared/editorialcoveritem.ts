import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EditorialCoverItem
/** 
 * Cover image for editorial livefeed
**/
export class EditorialCoverItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
