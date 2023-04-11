import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * The result of fetching an entity from Datastore.
 */
export declare class EntityResult extends SpeakeasyBase {
    /**
     * The time at which the entity was created. This field is set for `FULL` entity results. If this entity is missing, this field will not be set.
     */
    createTime?: string;
    /**
     * A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message.
     */
    cursor?: string;
    /**
     * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
     */
    entity?: Entity;
    /**
     * The time at which the entity was last changed. This field is set for `FULL` entity results. If this entity is missing, this field will not be set.
     */
    updateTime?: string;
    /**
     * The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for `FULL` entity results. For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads.
     */
    version?: string;
}
