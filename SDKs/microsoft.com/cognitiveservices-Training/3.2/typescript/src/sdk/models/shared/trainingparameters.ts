import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrainingParameters
/** 
 * Parameters used for training.
**/
export class TrainingParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedTags, form, name=selectedTags;" })
  selectedTags?: string[];
}
