import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialVideoContent } from "./editorialvideocontent";



// EditorialVideoSearchResults
/** 
 * Editorial search results
**/
export class EditorialVideoSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EditorialVideoContent })
  data: EditorialVideoContent[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=search_id" })
  searchId?: string;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}
