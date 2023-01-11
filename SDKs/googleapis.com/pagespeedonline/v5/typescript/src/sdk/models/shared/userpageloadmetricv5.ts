import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";



export class UserPageLoadMetricV5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=distributions", elemType: Bucket })
  distributions?: Bucket[];

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: string;

  @SpeakeasyMetadata({ data: "json, name=median" })
  median?: number;

  @SpeakeasyMetadata({ data: "json, name=metricId" })
  metricId?: string;

  @SpeakeasyMetadata({ data: "json, name=percentile" })
  percentile?: number;
}
