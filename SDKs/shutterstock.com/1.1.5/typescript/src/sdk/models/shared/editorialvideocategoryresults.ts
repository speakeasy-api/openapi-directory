import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialCategory } from "./editorialcategory";



// EditorialVideoCategoryResults
/** 
 * List of editorial video categories
**/
export class EditorialVideoCategoryResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EditorialCategory })
  data?: EditorialCategory[];
}
