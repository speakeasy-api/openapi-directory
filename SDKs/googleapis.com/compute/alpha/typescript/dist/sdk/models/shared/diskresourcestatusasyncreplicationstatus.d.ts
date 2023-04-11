import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiskResourceStatusAsyncReplicationStatusStateEnum {
    Active = "ACTIVE",
    Created = "CREATED",
    Starting = "STARTING",
    StateUnspecified = "STATE_UNSPECIFIED",
    Stopped = "STOPPED",
    Stopping = "STOPPING"
}
export declare class DiskResourceStatusAsyncReplicationStatus extends SpeakeasyBase {
    state?: DiskResourceStatusAsyncReplicationStatusStateEnum;
}
