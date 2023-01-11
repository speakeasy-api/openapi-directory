import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bin } from "./bin";
import { Percentiles } from "./percentiles";



export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histogram", elemType: Bin })
  histogram?: Bin[];

  @SpeakeasyMetadata({ data: "json, name=percentiles" })
  percentiles?: Percentiles;
}
