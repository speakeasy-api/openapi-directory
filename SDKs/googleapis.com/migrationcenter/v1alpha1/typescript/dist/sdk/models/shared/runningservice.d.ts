import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Guest OS running service details.
 */
export declare class RunningService extends SpeakeasyBase {
    /**
     * Service command line.
     */
    cmdline?: string;
    /**
     * Service binary path.
     */
    exePath?: string;
    /**
     * Service name.
     */
    name?: string;
    /**
     * Service pid.
     */
    pid?: string;
    /**
     * Service start mode (raw, OS-agnostic).
     */
    startMode?: string;
    /**
     * Service state (raw, OS-agnostic).
     */
    state?: string;
    /**
     * Service status.
     */
    status?: string;
}
