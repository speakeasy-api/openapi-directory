import { SpeakeasyBase } from "../../../internal/utils";
import { ListMeta } from "./listmeta";
import { Route } from "./route";
/**
 * ListRoutesResponse is a list of Route resources.
 */
export declare class ListRoutesResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * List of Routes.
     */
    items?: Route[];
    /**
     * The kind of this resource, in this case always "RouteList".
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
