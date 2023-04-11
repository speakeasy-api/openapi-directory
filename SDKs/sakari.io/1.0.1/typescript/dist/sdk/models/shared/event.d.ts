import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
export declare class Event extends SpeakeasyBase {
    accountId?: string;
    data?: any;
    eventId?: string;
    type?: EventTypeEnum;
}
