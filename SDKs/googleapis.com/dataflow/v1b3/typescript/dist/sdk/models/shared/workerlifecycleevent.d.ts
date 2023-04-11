import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The event being reported.
 */
export declare enum WorkerLifecycleEventEventEnum {
    UnknownEvent = "UNKNOWN_EVENT",
    OsStart = "OS_START",
    ContainerStart = "CONTAINER_START",
    NetworkUp = "NETWORK_UP",
    StagingFilesDownloadStart = "STAGING_FILES_DOWNLOAD_START",
    StagingFilesDownloadFinish = "STAGING_FILES_DOWNLOAD_FINISH",
    SDKInstallStart = "SDK_INSTALL_START",
    SDKInstallFinish = "SDK_INSTALL_FINISH"
}
/**
 * A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.
 */
export declare class WorkerLifecycleEvent extends SpeakeasyBase {
    /**
     * The start time of this container. All events will report this so that events can be grouped together across container/VM restarts.
     */
    containerStartTime?: string;
    /**
     * The event being reported.
     */
    event?: WorkerLifecycleEventEventEnum;
    /**
     * Other stats that can accompany an event. E.g. { "downloaded_bytes" : "123456" }
     */
    metadata?: Record<string, string>;
}
