import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialCategory } from "./editorialcategory";



// EditorialImageCategoryResults
/** 
 * List of editorial categories
**/
export class EditorialImageCategoryResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EditorialCategory })
  data?: EditorialCategory[];
}
