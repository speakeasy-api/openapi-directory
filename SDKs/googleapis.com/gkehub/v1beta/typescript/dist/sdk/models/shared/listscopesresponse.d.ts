import { SpeakeasyBase } from "../../../internal/utils";
import { Scope } from "./scope";
/**
 * List of Scopes.
 */
export declare class ListScopesResponse extends SpeakeasyBase {
    /**
     * A token to request the next page of resources from the `ListScopes` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string;
    /**
     * The list of Scopes
     */
    scopes?: Scope[];
}
