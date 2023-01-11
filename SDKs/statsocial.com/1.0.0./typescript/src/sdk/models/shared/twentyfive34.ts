import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatisticalInfo25 } from "./statisticalinfo25";



export class TwentyFive34 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=multiplicity" })
  multiplicity?: number;

  @SpeakeasyMetadata({ data: "json, name=percentile" })
  percentile?: number;

  @SpeakeasyMetadata({ data: "json, name=statistical_info" })
  statisticalInfo?: StatisticalInfo25;

  @SpeakeasyMetadata({ data: "json, name=stdev" })
  stdev?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
