import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTagCreateEntry } from "./imagetagcreateentry";



// ImageTagCreateBatch
/** 
 * Batch of image tags.
**/
export class ImageTagCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ImageTagCreateEntry })
  tags?: ImageTagCreateEntry[];
}
