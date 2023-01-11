import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
export declare enum EventImagesTypeEnum {
    Event = "event"
}
/**
 * This class defines an Event with only images view on the Discovery API
**/
export declare class EventImages extends SpeakeasyBase {
    id: string;
    images?: Image[];
    type: EventImagesTypeEnum;
}
