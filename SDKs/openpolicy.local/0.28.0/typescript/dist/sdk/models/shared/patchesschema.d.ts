import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON patch operation type
 */
export declare enum PatchesSchemaOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace",
    Move = "move",
    Copy = "copy",
    Test = "test"
}
/**
 * A JSON patch operation
 */
export declare class PatchesSchema extends SpeakeasyBase {
    /**
     * JSON patch operation type
     */
    op: PatchesSchemaOpEnum;
    /**
     * A [JSON pointer](https://tools.ietf.org/html/rfc6901) to a location within the target document where the operation is performed.
     *
     * @remarks
     *
     * The *effective path* is this value prefixed with the API call's `path` parameter.
     *
     * The server will return a *bad request* (404) response if:
     *
     * - The *parent* of the effective path does not refer to an existing document
     * - For **remove** and **replace** operations, the effective path does not refer to an existing document.
     */
    path: string;
    /**
     * The value to add, replace or test.
     */
    value?: Record<string, any>;
}
