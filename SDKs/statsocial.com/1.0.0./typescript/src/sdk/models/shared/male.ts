import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatisticalInfoM } from "./statisticalinfom";



export class Male extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=multiplicity" })
  multiplicity?: number;

  @SpeakeasyMetadata({ data: "json, name=percentile" })
  percentile?: number;

  @SpeakeasyMetadata({ data: "json, name=statistical_info" })
  statisticalInfo?: StatisticalInfoM;

  @SpeakeasyMetadata({ data: "json, name=stdev" })
  stdev?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
