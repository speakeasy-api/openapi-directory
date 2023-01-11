import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateManifestLabelIdsRequestBody
/** 
 * A create manifest request body
**/
export class CreateManifestLabelIdsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label_ids" })
  labelIds: string[];
}
