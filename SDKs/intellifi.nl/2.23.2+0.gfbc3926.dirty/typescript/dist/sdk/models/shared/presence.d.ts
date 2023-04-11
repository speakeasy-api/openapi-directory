import { SpeakeasyBase } from "../../../internal/utils";
import { GeoCoordsReadOnly } from "./geocoordsreadonly";
import { ItemProtocolEnum } from "./itemprotocolenum";
import { ItemTypeEnum } from "./itemtypeenum";
import { Location } from "./location";
import { ProximityEnum } from "./proximityenum";
import { TechnologyEnum } from "./technologyenum";
export declare class PresenceItem3 extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: GeoCoordsReadOnly;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.
     */
    isPresent?: boolean;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Url to the individual resource.
     */
    locationUrl?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.
     */
    moveCount?: number;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: ItemProtocolEnum;
    /**
     * List of set ids
     */
    sets?: string[];
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: TechnologyEnum;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * Last time the item was present.
     */
    timeLastPresent?: string;
    /**
     * Last time this item moved. This is the last time that the location for this item was changed.
     */
    timeMoved?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Type of item.
     */
    type?: ItemTypeEnum;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class PresenceItem2 extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: GeoCoordsReadOnly;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.
     */
    isPresent?: boolean;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Unique identifier for resource.
     */
    locationId?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.
     */
    moveCount?: number;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: ItemProtocolEnum;
    /**
     * List of set ids
     */
    sets?: string[];
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: TechnologyEnum;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * Last time the item was present.
     */
    timeLastPresent?: string;
    /**
     * Last time this item moved. This is the last time that the location for this item was changed.
     */
    timeMoved?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Type of item.
     */
    type?: ItemTypeEnum;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class PresenceItem1 extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: GeoCoordsReadOnly;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.
     */
    isPresent?: boolean;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    location?: Location;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.
     */
    moveCount?: number;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: ItemProtocolEnum;
    /**
     * List of set ids
     */
    sets?: string[];
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: TechnologyEnum;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * Last time the item was present.
     */
    timeLastPresent?: string;
    /**
     * Last time this item moved. This is the last time that the location for this item was changed.
     */
    timeMoved?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Type of item.
     */
    type?: ItemTypeEnum;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
/**
 * A JSON object containing the presence
 */
export declare class Presence extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    id?: string;
    item?: any;
    /**
     * Unique identifier for resource.
     */
    itemId?: string;
    /**
     * Url to the individual resource.
     */
    itemUrl?: string;
    location?: Location;
    /**
     * Unique identifier for resource.
     */
    locationId?: string;
    /**
     * Url to the individual resource.
     */
    locationUrl?: string;
    /**
     * Strongest proximity of all 'child' presences. This is a rough estimate on the distance from the item to the receiver.
     */
    proximity?: ProximityEnum;
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: TechnologyEnum;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
