import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatisticalInfoM extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_range" })
  errorRange?: number;

  @SpeakeasyMetadata({ data: "json, name=lower_bound" })
  lowerBound?: number;

  @SpeakeasyMetadata({ data: "json, name=upper_bound" })
  upperBound?: number;
}
