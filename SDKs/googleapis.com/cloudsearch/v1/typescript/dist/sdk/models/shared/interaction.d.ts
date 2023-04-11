import { SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";
export declare enum InteractionTypeEnum {
    Unspecified = "UNSPECIFIED",
    View = "VIEW",
    Edit = "EDIT"
}
/**
 * Represents an interaction between a user and an item.
 */
export declare class Interaction extends SpeakeasyBase {
    /**
     * The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded.
     */
    interactionTime?: string;
    /**
     * Reference to a user, group, or domain.
     */
    principal?: Principal;
    type?: InteractionTypeEnum;
}
