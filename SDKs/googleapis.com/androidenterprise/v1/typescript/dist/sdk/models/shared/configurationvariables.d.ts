import { SpeakeasyBase } from "../../../internal/utils";
import { VariableSet } from "./variableset";
/**
 * A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
 */
export declare class ConfigurationVariables extends SpeakeasyBase {
    /**
     * The ID of the managed configurations settings.
     */
    mcmId?: string;
    /**
     * The variable set that is attributed to the user.
     */
    variableSet?: VariableSet[];
}
