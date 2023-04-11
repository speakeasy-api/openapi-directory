import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
 */
export declare class GoogleCloudDocumentaiV1DocumentShardInfo extends SpeakeasyBase {
    /**
     * Total number of shards.
     */
    shardCount?: string;
    /**
     * The 0-based index of this shard.
     */
    shardIndex?: string;
    /**
     * The index of the first character in Document.text in the overall document global text.
     */
    textOffset?: string;
}
