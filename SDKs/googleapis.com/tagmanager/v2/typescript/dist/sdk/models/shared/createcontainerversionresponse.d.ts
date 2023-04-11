import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { SyncStatus } from "./syncstatus";
/**
 * Create container versions response.
 */
export declare class CreateContainerVersionResponse extends SpeakeasyBase {
    /**
     * Compiler errors or not.
     */
    compilerError?: boolean;
    /**
     * Represents a Google Tag Manager Container Version.
     */
    containerVersion?: ContainerVersion;
    /**
     * Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.
     */
    newWorkspacePath?: string;
    /**
     * The status of a workspace after synchronization.
     */
    syncStatus?: SyncStatus;
}
