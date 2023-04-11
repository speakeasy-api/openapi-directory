import { SpeakeasyBase } from "../../../internal/utils";
import { ListPopulationTerm } from "./listpopulationterm";
/**
 * A group clause made up of list population terms representing constraints joined by ORs.
 */
export declare class ListPopulationClause extends SpeakeasyBase {
    /**
     * Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs.
     */
    terms?: ListPopulationTerm[];
}
