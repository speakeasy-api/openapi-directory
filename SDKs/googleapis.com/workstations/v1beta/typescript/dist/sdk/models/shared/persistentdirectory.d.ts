import { SpeakeasyBase } from "../../../internal/utils";
import { GceRegionalPersistentDisk } from "./gceregionalpersistentdisk";
/**
 * A directory to persist across workstation sessions.
 */
export declare class PersistentDirectory extends SpeakeasyBase {
    /**
     * A PersistentDirectory backed by a Compute Engine regional persistent disk.
     */
    gcePd?: GceRegionalPersistentDisk;
    /**
     * Location of this directory in the running workstation.
     */
    mountPath?: string;
}
