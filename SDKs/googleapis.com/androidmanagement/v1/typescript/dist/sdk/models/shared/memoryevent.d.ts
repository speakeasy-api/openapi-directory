import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event type.
 */
export declare enum MemoryEventEventTypeEnum {
    MemoryEventTypeUnspecified = "MEMORY_EVENT_TYPE_UNSPECIFIED",
    RamMeasured = "RAM_MEASURED",
    InternalStorageMeasured = "INTERNAL_STORAGE_MEASURED",
    ExternalStorageDetected = "EXTERNAL_STORAGE_DETECTED",
    ExternalStorageRemoved = "EXTERNAL_STORAGE_REMOVED",
    ExternalStorageMeasured = "EXTERNAL_STORAGE_MEASURED"
}
/**
 * An event related to memory and storage measurements.
 */
export declare class MemoryEvent extends SpeakeasyBase {
    /**
     * The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.
     */
    byteCount?: string;
    /**
     * The creation time of the event.
     */
    createTime?: string;
    /**
     * Event type.
     */
    eventType?: MemoryEventEventTypeEnum;
}
