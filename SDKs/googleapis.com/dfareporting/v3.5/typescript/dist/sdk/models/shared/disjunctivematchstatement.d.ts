import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
 */
export declare class DisjunctiveMatchStatement extends SpeakeasyBase {
    /**
     * The event filters contained within this disjunctive match statement.
     */
    eventFilters?: EventFilter[];
    /**
     * The kind of resource this is, in this case dfareporting#disjunctiveMatchStatement.
     */
    kind?: string;
}
