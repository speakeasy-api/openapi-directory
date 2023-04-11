import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents custom chat command
 */
export declare class CreateCommandRequest extends SpeakeasyBase {
    /**
     * Arguments help text, shown in commands auto-completion
     */
    args?: string;
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
    set?: string;
}
