import { SpeakeasyBase } from "../../../internal/utils";
import { SourceMetadata } from "./sourcemetadata";
/**
 * The result of a SourceGetMetadataOperation.
 */
export declare class SourceGetMetadataResponse extends SpeakeasyBase {
    /**
     * Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
     */
    metadata?: SourceMetadata;
}
