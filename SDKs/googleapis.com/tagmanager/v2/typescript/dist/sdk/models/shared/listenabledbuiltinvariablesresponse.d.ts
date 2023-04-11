import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltInVariable } from "./builtinvariable";
/**
 * A list of enabled built-in variables.
 */
export declare class ListEnabledBuiltInVariablesResponse extends SpeakeasyBase {
    /**
     * All GTM BuiltInVariables of a GTM container.
     */
    builtInVariable?: BuiltInVariable[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
