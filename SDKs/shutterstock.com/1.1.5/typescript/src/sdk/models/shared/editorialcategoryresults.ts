import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditorialCategory } from "./editorialcategory";



// EditorialCategoryResults
/** 
 * List of editorial categories
**/
export class EditorialCategoryResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EditorialCategory })
  data?: EditorialCategory[];
}
