import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Restrict changes spot and brain.
 */
export declare class SpotSetTypeListRestrictions extends SpeakeasyBase {
    /**
     * Server can change this set.
     */
    allowServerEdit?: boolean;
    /**
     * Spots can change set, differences from the brain server will be merged with the device
     */
    allowSpotEdit?: boolean;
}
/**
 * Spot set type `list`; List of items. Matches this set if Item is part of this list.
 */
export declare enum SpotSetTypeListTypeEnum {
    List = "list"
}
export declare class SpotSetTypeListInput extends SpeakeasyBase {
    /**
     * Unique identifier for resource.
     */
    itemlistId?: string;
    /**
     * Number, list limit, default `1000` if not specified.
     */
    limit?: number;
    /**
     * Restrict changes spot and brain.
     */
    restrictions?: SpotSetTypeListRestrictions;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `list`; List of items. Matches this set if Item is part of this list.
     */
    type?: SpotSetTypeListTypeEnum;
}
export declare class SpotSetTypeList extends SpeakeasyBase {
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Unique identifier for resource.
     */
    itemlistId?: string;
    /**
     * Number, list limit, default `1000` if not specified.
     */
    limit?: number;
    /**
     * Last mutation that was synchronized to the device. This is used for internal synchronization between the device and the server.
     */
    mutation?: string;
    /**
     * Restrict changes spot and brain.
     */
    restrictions?: SpotSetTypeListRestrictions;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * The sha1 checksum of the list. This will change when the list is mutated.
     */
    sha1?: string;
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
     * Total amount of items in this set
     */
    total?: number;
    /**
     * Spot set type `list`; List of items. Matches this set if Item is part of this list.
     */
    type?: SpotSetTypeListTypeEnum;
}
