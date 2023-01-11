import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PredictionQueryTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=maxThreshold" })
  maxThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=minThreshold" })
  minThreshold?: number;
}
