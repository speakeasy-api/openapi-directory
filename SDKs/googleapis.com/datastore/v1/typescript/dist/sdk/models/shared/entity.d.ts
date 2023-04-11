import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { Value } from "./value";
/**
 * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
 */
export declare class Entity extends SpeakeasyBase {
    /**
     * A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
     */
    key?: Key;
    /**
     * The entity's properties. The map's keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The name must not contain more than 500 characters. The name cannot be `""`.
     */
    properties?: Record<string, Value>;
}
