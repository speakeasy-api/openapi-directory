import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LearningCurve extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=epoch" })
  epoch?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=epochResults" })
  epochResults?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=metricsData" })
  metricsData?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
