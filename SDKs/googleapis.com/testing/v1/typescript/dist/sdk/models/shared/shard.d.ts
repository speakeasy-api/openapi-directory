import { SpeakeasyBase } from "../../../internal/utils";
import { TestTargetsForShard } from "./testtargetsforshard";
/**
 * Output only. Details about the shard.
 */
export declare class Shard extends SpeakeasyBase {
    /**
     * Output only. The total number of shards.
     */
    numShards?: number;
    /**
     * Output only. The index of the shard among all the shards.
     */
    shardIndex?: number;
    /**
     * Test targets for a shard.
     */
    testTargetsForShard?: TestTargetsForShard;
}
