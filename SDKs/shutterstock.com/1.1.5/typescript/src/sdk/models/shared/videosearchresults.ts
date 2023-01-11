import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";



// VideoSearchResults
/** 
 * Video search results
**/
export class VideoSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Video })
  data: Video[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=search_id" })
  searchId: string;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}
