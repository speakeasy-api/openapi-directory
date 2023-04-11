import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { ListMeta } from "./listmeta";
/**
 * ListConfigurationsResponse is a list of Configuration resources.
 */
export declare class ListConfigurationsResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * List of Configurations.
     */
    items?: Configuration[];
    /**
     * The kind of this resource, in this case "ConfigurationList".
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
