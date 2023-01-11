import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// ImageSearchResults
/** 
 * Image search results
**/
export class ImageSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Image })
  data: Image[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=search_id" })
  searchId: string;

  @SpeakeasyMetadata({ data: "json, name=spellcheck_info" })
  spellcheckInfo?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}
