import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * The response message for Operations.ListOperations.
 */
export declare class ListOperationsResponse extends SpeakeasyBase {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Operation[];
}
