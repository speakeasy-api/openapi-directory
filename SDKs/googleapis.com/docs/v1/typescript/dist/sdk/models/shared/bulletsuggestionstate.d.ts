import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
/**
 * A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class BulletSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to the list_id.
     */
    listIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to the nesting_level.
     */
    nestingLevelSuggested?: boolean;
    /**
     * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    textStyleSuggestionState?: TextStyleSuggestionState;
}
