import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialUpdatedContent } from "./editorialupdatedcontent";



// EditorialUpdatedResults
/** 
 * Editorial updated results
**/
export class EditorialUpdatedResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EditorialUpdatedContent })
  data: EditorialUpdatedContent[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}
