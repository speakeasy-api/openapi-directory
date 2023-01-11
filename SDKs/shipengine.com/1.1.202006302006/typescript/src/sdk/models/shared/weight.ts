import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeightUnitEnum } from "./weightunitenum";



// Weight
/** 
 * The weight of a package
**/
export class Weight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: WeightUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
