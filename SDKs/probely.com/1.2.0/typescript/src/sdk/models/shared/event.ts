import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { EventObjectTypeEnum } from "./eventobjecttypeenum";
import { Webhook } from "./webhook";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType?: EventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=object_type" })
  objectType?: EventObjectTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ocurred_at" })
  ocurredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: Webhook })
  webhooks?: Webhook[];
}
