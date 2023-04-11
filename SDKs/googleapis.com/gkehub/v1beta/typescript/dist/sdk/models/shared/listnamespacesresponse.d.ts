import { SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";
/**
 * List of fleet namespaces.
 */
export declare class ListNamespacesResponse extends SpeakeasyBase {
    /**
     * The list of fleet namespaces
     */
    namespaces?: Namespace[];
    /**
     * A token to request the next page of resources from the `ListNamespaces` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string;
}
