import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";



// StoredSuggestedTagAndRegion
/** 
 * Result of a suggested tags and regions request of the untagged image.
**/
export class StoredSuggestedTagAndRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=iteration" })
  iteration?: string;

  @SpeakeasyMetadata({ data: "json, name=originalImageUri" })
  originalImageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=predictionUncertainty" })
  predictionUncertainty?: number;

  @SpeakeasyMetadata({ data: "json, name=predictions", elemType: Prediction })
  predictions?: Prediction[];

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=resizedImageUri" })
  resizedImageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
