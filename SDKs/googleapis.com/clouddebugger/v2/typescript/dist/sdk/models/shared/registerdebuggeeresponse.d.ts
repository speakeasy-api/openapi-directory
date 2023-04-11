import { SpeakeasyBase } from "../../../internal/utils";
import { Debuggee } from "./debuggee";
/**
 * Response for registering a debuggee.
 */
export declare class RegisterDebuggeeResponse extends SpeakeasyBase {
    /**
     * A unique ID generated for the agent. Each RegisterDebuggee request will generate a new agent ID.
     */
    agentId?: string;
    /**
     * Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.
     */
    debuggee?: Debuggee;
}
