import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { EventObjectTypeEnum } from "./eventobjecttypeenum";
import { Webhook } from "./webhook";
export declare class Event extends SpeakeasyBase {
    content?: Record<string, any>;
    eventType?: EventTypeEnum;
    id?: string;
    objectType?: EventObjectTypeEnum;
    ocurredAt?: Date;
    webhooks?: Webhook[];
}
