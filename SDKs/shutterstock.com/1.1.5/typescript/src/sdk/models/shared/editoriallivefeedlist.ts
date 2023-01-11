import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialLivefeed } from "./editoriallivefeed";



// EditorialLivefeedList
/** 
 * List of editorial livefeeds
**/
export class EditorialLivefeedList extends SpeakeasyBase {
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
