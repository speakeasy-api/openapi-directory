import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialLivefeed } from "./editoriallivefeed";



// EditorialImageLivefeedList
/** 
 * List of editorial livefeeds
**/
export class EditorialImageLivefeedList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EditorialLivefeed })
  data: EditorialLivefeed[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}
