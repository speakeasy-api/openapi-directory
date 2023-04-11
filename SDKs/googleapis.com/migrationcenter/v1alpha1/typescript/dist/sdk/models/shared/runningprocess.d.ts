import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Guest OS running process details.
 */
export declare class RunningProcess extends SpeakeasyBase {
    /**
     * Process extended attributes.
     */
    attributes?: Record<string, string>;
    /**
     * Process full command line.
     */
    cmdline?: string;
    /**
     * Process binary path.
     */
    exePath?: string;
    /**
     * Process ID.
     */
    pid?: string;
    /**
     * User running the process.
     */
    user?: string;
}
