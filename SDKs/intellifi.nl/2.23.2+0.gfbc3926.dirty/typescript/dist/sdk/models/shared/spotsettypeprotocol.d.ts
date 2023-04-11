import { SpeakeasyBase } from "../../../internal/utils";
import { ItemProtocolEnum } from "./itemprotocolenum";
/**
 * Spot set type `protocol`; Matches Items with the same Protocol as specified by this set.
 */
export declare enum SpotSetTypeProtocolTypeEnum {
    Protocol = "protocol"
}
export declare class SpotSetTypeProtocolInput extends SpeakeasyBase {
    /**
     * Type of protocol that was used to decode this item.
     */
    itemProtocol?: ItemProtocolEnum;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `protocol`; Matches Items with the same Protocol as specified by this set.
     */
    type?: SpotSetTypeProtocolTypeEnum;
}
export declare class SpotSetTypeProtocol extends SpeakeasyBase {
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Type of protocol that was used to decode this item.
     */
    itemProtocol?: ItemProtocolEnum;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Unique identifier for resource.
     */
    spotId?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Spot set type `protocol`; Matches Items with the same Protocol as specified by this set.
     */
    type?: SpotSetTypeProtocolTypeEnum;
}
