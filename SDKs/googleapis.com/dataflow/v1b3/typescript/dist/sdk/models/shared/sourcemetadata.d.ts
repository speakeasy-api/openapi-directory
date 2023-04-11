import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
 */
export declare class SourceMetadata extends SpeakeasyBase {
    /**
     * An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader.
     */
    estimatedSizeBytes?: string;
    /**
     * Specifies that the size of this source is known to be infinite (this is a streaming source).
     */
    infinite?: boolean;
    /**
     * Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order.
     */
    producesSortedKeys?: boolean;
}
