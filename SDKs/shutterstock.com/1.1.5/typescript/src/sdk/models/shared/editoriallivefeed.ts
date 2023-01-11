import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialCoverItem } from "./editorialcoveritem";



// EditorialLivefeed
/** 
 * Metadata about editorial livefeed
**/
export class EditorialLivefeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cover_item" })
  coverItem?: EditorialCoverItem;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=total_item_count" })
  totalItemCount: number;
}
