import { SpeakeasyBase } from "../../../internal/utils";
import { ListMeta } from "./listmeta";
import { Service } from "./service";
/**
 * A list of Service resources.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * The API version for this call; returns "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * List of Services.
     */
    items?: Service[];
    /**
     * The kind of this resource; returns "ServiceList".
     */
    kind?: string;
    /**
     * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
     */
    metadata?: ListMeta;
    /**
     * For calls against the global endpoint, returns the list of Cloud locations that could not be reached. For regional calls, this field is not used.
     */
    unreachable?: string[];
}
