import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnalyticsCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anonymousId" })
  anonymousId?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
