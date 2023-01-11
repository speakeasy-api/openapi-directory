import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarketingEventEmailSubscriber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactProperties" })
  contactProperties?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=interactionDateTime" })
  interactionDateTime: number;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Record<string, string>;
}
