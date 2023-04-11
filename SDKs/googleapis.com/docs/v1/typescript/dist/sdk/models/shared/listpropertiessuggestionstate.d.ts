import { SpeakeasyBase } from "../../../internal/utils";
import { NestingLevelSuggestionState } from "./nestinglevelsuggestionstate";
/**
 * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class ListPropertiesSuggestionState extends SpeakeasyBase {
    /**
     * A mask that indicates which of the fields on the corresponding NestingLevel in nesting_levels have been changed in this suggestion. The nesting level suggestion states are returned in ascending order of the nesting level with the least nested returned first.
     */
    nestingLevelsSuggestionStates?: NestingLevelSuggestionState[];
}
