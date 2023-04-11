import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * DisjunctiveMatchStatement that OR's all contained filters.
 */
export declare class DisjunctiveMatchStatement extends SpeakeasyBase {
    /**
     * Filters. There is a limit of 100 filters that can be set per disjunctive match statement.
     */
    eventFilters?: EventFilter[];
}
