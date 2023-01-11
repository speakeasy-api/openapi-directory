import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// ListTagsResponseBody
/** 
 * Response body from a successful GET /tags API call
**/
export class ListTagsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
