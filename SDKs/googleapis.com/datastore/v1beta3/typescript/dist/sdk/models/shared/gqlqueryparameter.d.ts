import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A binding parameter for a GQL query.
 */
export declare class GqlQueryParameter extends SpeakeasyBase {
    /**
     * A query cursor. Query cursors are returned in query result batches.
     */
    cursor?: string;
    /**
     * A message that can hold any of the supported value types and associated metadata.
     */
    value?: Value;
}
