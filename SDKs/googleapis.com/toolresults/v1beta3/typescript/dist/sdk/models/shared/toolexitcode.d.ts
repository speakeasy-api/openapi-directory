import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Exit code from a tool execution.
 */
export declare class ToolExitCode extends SpeakeasyBase {
    /**
     * Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set
     */
    number?: number;
}
