import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The sharding config for the output document.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig extends SpeakeasyBase {
    /**
     * The number of overlapping pages between consecutive shards.
     */
    pagesOverlap?: number;
    /**
     * The number of pages per shard.
     */
    pagesPerShard?: number;
}
