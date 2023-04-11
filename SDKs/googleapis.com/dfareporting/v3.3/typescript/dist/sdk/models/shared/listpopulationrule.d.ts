import { SpeakeasyBase } from "../../../internal/utils";
import { ListPopulationClause } from "./listpopulationclause";
/**
 * Remarketing List Population Rule.
 */
export declare class ListPopulationRule extends SpeakeasyBase {
    /**
     * Floodlight activity ID associated with this rule. This field can be left blank.
     */
    floodlightActivityId?: string;
    /**
     * Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.
     */
    floodlightActivityName?: string;
    /**
     * Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs.
     */
    listPopulationClauses?: ListPopulationClause[];
}
