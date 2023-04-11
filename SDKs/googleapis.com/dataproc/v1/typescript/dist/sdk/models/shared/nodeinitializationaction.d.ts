import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an executable to run on a fully configured node and a timeout period for executable completion.
 */
export declare class NodeInitializationAction extends SpeakeasyBase {
    /**
     * Required. Cloud Storage URI of executable file.
     */
    executableFile?: string;
    /**
     * Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
     */
    executionTimeout?: string;
}
