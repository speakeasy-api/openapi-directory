import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Type of the entity
 */
export declare enum EventImagesTypeEnum {
    Event = "event"
}
/**
 * This class defines an Event with only images view on the Discovery API
 */
export declare class EventImages extends SpeakeasyBase {
    /**
     * Unique id of the entity in the discovery API
     */
    id: string;
    /**
     * Images of the entity
     */
    images?: Image[];
    /**
     * Type of the entity
     */
    type: EventImagesTypeEnum;
}
