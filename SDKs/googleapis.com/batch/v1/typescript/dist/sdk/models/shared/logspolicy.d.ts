import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Where logs should be saved.
 */
export declare enum LogsPolicyDestinationEnum {
    DestinationUnspecified = "DESTINATION_UNSPECIFIED",
    CloudLogging = "CLOUD_LOGGING",
    Path = "PATH"
}
/**
 * LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
 */
export declare class LogsPolicy extends SpeakeasyBase {
    /**
     * Where logs should be saved.
     */
    destination?: LogsPolicyDestinationEnum;
    /**
     * The path to which logs are saved when the destination = PATH. This can be a local file path on the VM, or under the mount point of a Persistent Disk or Filestore, or a Cloud Storage path.
     */
    logsPath?: string;
}
