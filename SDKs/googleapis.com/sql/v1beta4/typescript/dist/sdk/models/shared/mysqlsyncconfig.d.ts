import { SpeakeasyBase } from "../../../internal/utils";
import { SyncFlags } from "./syncflags";
/**
 * MySQL-specific external server sync settings.
 */
export declare class MySqlSyncConfig extends SpeakeasyBase {
    /**
     * Flags to use for the initial dump.
     */
    initialSyncFlags?: SyncFlags[];
}
