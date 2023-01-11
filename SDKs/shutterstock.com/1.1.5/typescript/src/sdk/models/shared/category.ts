import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Category
/** 
 * Category information
**/
export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
