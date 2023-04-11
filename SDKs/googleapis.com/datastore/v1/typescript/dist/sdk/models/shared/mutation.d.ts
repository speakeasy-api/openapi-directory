import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { Key } from "./key";
/**
 * A mutation to apply to an entity.
 */
export declare class Mutation extends SpeakeasyBase {
    /**
     * The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts.
     */
    baseVersion?: string;
    /**
     * A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
     */
    delete?: Key;
    /**
     * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
     */
    insert?: Entity;
    /**
     * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
     */
    update?: Entity;
    /**
     * The update time of the entity that this mutation is being applied to. If this does not match the current update time on the server, the mutation conflicts.
     */
    updateTime?: string;
    /**
     * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
     */
    upsert?: Entity;
}
