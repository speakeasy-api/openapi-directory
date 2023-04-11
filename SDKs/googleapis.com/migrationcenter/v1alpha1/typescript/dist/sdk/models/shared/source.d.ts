import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data source type.
 */
export declare enum SourceTypeEnum {
    SourceTypeUnknown = "SOURCE_TYPE_UNKNOWN",
    SourceTypeUpload = "SOURCE_TYPE_UPLOAD",
    SourceTypeGuestOsScan = "SOURCE_TYPE_GUEST_OS_SCAN",
    SourceTypeInventoryScan = "SOURCE_TYPE_INVENTORY_SCAN",
    SourceTypeCustom = "SOURCE_TYPE_CUSTOM"
}
/**
 * Source represents an object from which asset information is streamed to Migration Center.
 */
export declare class SourceInput extends SpeakeasyBase {
    /**
     * Free-text description.
     */
    description?: string;
    /**
     * User-friendly display name.
     */
    displayName?: string;
    /**
     * If `true`, the source is managed by other service(s).
     */
    isManaged?: boolean;
    /**
     * The information confidence of the source. The higher the value, the higher the confidence.
     */
    priority?: number;
    /**
     * Data source type.
     */
    type?: SourceTypeEnum;
}
/**
 * Source represents an object from which asset information is streamed to Migration Center.
 */
export declare class Source extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the source was created.
     */
    createTime?: string;
    /**
     * Free-text description.
     */
    description?: string;
    /**
     * User-friendly display name.
     */
    displayName?: string;
    /**
     * If `true`, the source is managed by other service(s).
     */
    isManaged?: boolean;
    /**
     * Output only. The full name of the source.
     */
    name?: string;
    /**
     * Output only. Number of frames that are still being processed.
     */
    pendingFrameCount?: number;
    /**
     * The information confidence of the source. The higher the value, the higher the confidence.
     */
    priority?: number;
    /**
     * Data source type.
     */
    type?: SourceTypeEnum;
    /**
     * Output only. The timestamp when the source was last updated.
     */
    updateTime?: string;
}
