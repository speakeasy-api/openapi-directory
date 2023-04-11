import { SpeakeasyBase } from "../../../internal/utils";
import { ManualSharding } from "./manualsharding";
import { UniformSharding } from "./uniformsharding";
/**
 * Options for enabling sharding.
 */
export declare class ShardingOption extends SpeakeasyBase {
    /**
     * Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
     */
    manualSharding?: ManualSharding;
    /**
     * Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.
     */
    uniformSharding?: UniformSharding;
}
