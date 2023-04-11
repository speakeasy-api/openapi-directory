import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledSnapshotsConfig } from "./scheduledsnapshotsconfig";
/**
 * The Recovery settings of an environment.
 */
export declare class RecoveryConfig extends SpeakeasyBase {
    /**
     * The configuration for scheduled snapshot creation mechanism.
     */
    scheduledSnapshotsConfig?: ScheduledSnapshotsConfig;
}
