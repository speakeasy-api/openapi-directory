import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The result of applying a mutation.
 */
export declare class MutationResult extends SpeakeasyBase {
    /**
     * Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation.
     */
    conflictDetected?: boolean;
    /**
     * The create time of the entity. This field will not be set after a 'delete'.
     */
    createTime?: string;
    /**
     * A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
     */
    key?: Key;
    /**
     * The update time of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the timestamp will be the update timestamp of the current entity. This field will not be set after a 'delete'.
     */
    updateTime?: string;
    /**
     * The version of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity.
     */
    version?: string;
}
