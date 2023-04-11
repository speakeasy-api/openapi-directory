import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A context rule provides information about the context for an individual API element.
 */
export declare class ContextRule extends SpeakeasyBase {
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc side channel from client to backend.
     */
    allowedRequestExtensions?: string[];
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc side channel from backend to client.
     */
    allowedResponseExtensions?: string[];
    /**
     * A list of full type names of provided contexts.
     */
    provided?: string[];
    /**
     * A list of full type names of requested contexts.
     */
    requested?: string[];
    /**
     * Selects the methods to which this rule applies. Refer to selector for syntax details.
     */
    selector?: string;
}
