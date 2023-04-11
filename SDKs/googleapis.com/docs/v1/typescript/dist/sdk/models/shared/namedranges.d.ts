import { SpeakeasyBase } from "../../../internal/utils";
import { NamedRange } from "./namedrange";
/**
 * A collection of all the NamedRanges in the document that share a given name.
 */
export declare class NamedRanges extends SpeakeasyBase {
    /**
     * The name that all the named ranges share.
     */
    name?: string;
    /**
     * The NamedRanges that share the same name.
     */
    namedRanges?: NamedRange[];
}
