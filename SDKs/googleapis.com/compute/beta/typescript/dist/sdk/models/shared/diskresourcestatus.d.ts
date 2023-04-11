import { SpeakeasyBase } from "../../../internal/utils";
import { DiskResourceStatusAsyncReplicationStatus } from "./diskresourcestatusasyncreplicationstatus";
export declare class DiskResourceStatus extends SpeakeasyBase {
    asyncPrimaryDisk?: DiskResourceStatusAsyncReplicationStatus;
    /**
     * Key: disk, value: AsyncReplicationStatus message
     */
    asyncSecondaryDisks?: Record<string, DiskResourceStatusAsyncReplicationStatus>;
}
