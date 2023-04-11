import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An environment variable to set for an action.
 */
export declare class EnvVariable extends SpeakeasyBase {
    /**
     * Deprecated, do not use.
     */
    hidden?: boolean;
    /**
     * The name of the environment variable.
     */
    name?: string;
    /**
     * The value of the variable.
     */
    value?: string;
}
