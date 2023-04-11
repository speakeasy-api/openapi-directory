import { SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";
/**
 * The response message for RegistrationService.ListNamespaces.
 */
export declare class ListNamespacesResponse extends SpeakeasyBase {
    /**
     * The list of namespaces.
     */
    namespaces?: Namespace[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
