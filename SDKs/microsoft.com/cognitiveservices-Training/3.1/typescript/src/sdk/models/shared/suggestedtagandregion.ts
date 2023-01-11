import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";



// SuggestedTagAndRegion
/** 
 * Result of a suggested tags and regions request.
**/
export class SuggestedTagAndRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=iteration" })
  iteration?: string;

  @SpeakeasyMetadata({ data: "json, name=predictionUncertainty" })
  predictionUncertainty?: number;

  @SpeakeasyMetadata({ data: "json, name=predictions", elemType: Prediction })
  predictions?: Prediction[];

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
