import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Progress information for an export.
 */
export declare class ExportStats extends SpeakeasyBase {
    /**
     * The number of messages or files already processed for export.
     */
    exportedArtifactCount?: string;
    /**
     * The size of export in bytes.
     */
    sizeInBytes?: string;
    /**
     * The number of messages or files to be exported.
     */
    totalArtifactCount?: string;
}
