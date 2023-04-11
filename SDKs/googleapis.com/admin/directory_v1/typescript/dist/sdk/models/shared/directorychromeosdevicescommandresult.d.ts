import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of the command.
 */
export declare enum DirectoryChromeosdevicesCommandResultResultEnum {
    CommandResultTypeUnspecified = "COMMAND_RESULT_TYPE_UNSPECIFIED",
    Ignored = "IGNORED",
    Failure = "FAILURE",
    Success = "SUCCESS"
}
/**
 * The result of executing a command.
 */
export declare class DirectoryChromeosdevicesCommandResult extends SpeakeasyBase {
    /**
     * The payload for the command result. The following commands respond with a payload: * `DEVICE_START_CRD_SESSION`: Payload is a stringified JSON object in the form: { "url": url }. The URL provides a link to the Chrome Remote Desktop session.
     */
    commandResultPayload?: string;
    /**
     * The error message with a short explanation as to why the command failed. Only present if the command failed.
     */
    errorMessage?: string;
    /**
     * The time at which the command was executed or failed to execute.
     */
    executeTime?: string;
    /**
     * The result of the command.
     */
    result?: DirectoryChromeosdevicesCommandResultResultEnum;
}
