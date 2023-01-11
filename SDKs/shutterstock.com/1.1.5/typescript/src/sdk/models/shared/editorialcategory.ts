import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EditorialCategory
/** 
 * Name of an editorial category
**/
export class EditorialCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
