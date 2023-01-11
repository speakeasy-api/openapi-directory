import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Audio } from "./audio";



// AudioSearchResults
/** 
 * Audio search results
**/
export class AudioSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Audio })
  data: Audio[];

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
