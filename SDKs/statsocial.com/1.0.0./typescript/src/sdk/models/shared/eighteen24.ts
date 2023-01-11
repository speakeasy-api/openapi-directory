import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatisticalInfo18 } from "./statisticalinfo18";



export class Eighteen24 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=multiplicity" })
  multiplicity?: number;

  @SpeakeasyMetadata({ data: "json, name=percentile" })
  percentile?: number;

  @SpeakeasyMetadata({ data: "json, name=statistical_info" })
  statisticalInfo?: StatisticalInfo18;

  @SpeakeasyMetadata({ data: "json, name=stdev" })
  stdev?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
