import { SpeakeasyBase } from "../../../internal/utils";
import { Behavior } from "./behavior";
/**
 * Represents behaviour search results
 */
export declare class BehaviourOutput extends SpeakeasyBase {
    /**
     * Behavior list
     */
    behavior: Behavior[];
    /**
     * Path to this resource
     */
    self: string;
}
