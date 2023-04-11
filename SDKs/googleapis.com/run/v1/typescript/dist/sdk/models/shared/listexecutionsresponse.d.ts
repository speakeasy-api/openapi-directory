import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
import { ListMeta } from "./listmeta";
/**
 * ListExecutionsResponse is a list of Executions resources.
 */
export declare class ListExecutionsResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "run.googleapis.com/v1".
     */
    apiVersion?: string;
    /**
     * List of Executions.
     */
    items?: Execution[];
    /**
     * The kind of this resource, in this case "ExecutionsList".
     */
    kind?: string;
    /**
     * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
     */
    metadata?: ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
