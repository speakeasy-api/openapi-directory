import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { SyncStatus } from "./syncstatus";
/**
 * Response to quick previewing a workspace.
 */
export declare class QuickPreviewResponse extends SpeakeasyBase {
    /**
     * Were there compiler errors or not.
     */
    compilerError?: boolean;
    /**
     * Represents a Google Tag Manager Container Version.
     */
    containerVersion?: ContainerVersion;
    /**
     * The status of a workspace after synchronization.
     */
    syncStatus?: SyncStatus;
}
