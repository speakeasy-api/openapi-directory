import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents custom chat command
 */
export declare class Command extends SpeakeasyBase {
    /**
     * Arguments help text, shown in commands auto-completion
     */
    args: string;
    /**
     * Date/time of creation
     */
    createdAt?: Date;
    /**
     * Description, shown in commands auto-completion
     */
    description: string;
    /**
     * Unique command name
     */
    name: string;
    /**
     * Set name used for grouping commands
     */
    set: string;
    /**
     * Date/time of the last update
     */
    updatedAt?: Date;
}
