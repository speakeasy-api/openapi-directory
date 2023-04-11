import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.
 */
export declare class SourceSplitOptions extends SpeakeasyBase {
    /**
     * The source should be split into a set of bundles where the estimated size of each is approximately this many bytes.
     */
    desiredBundleSizeBytes?: string;
    /**
     * DEPRECATED in favor of desired_bundle_size_bytes.
     */
    desiredShardSizeBytes?: string;
}
