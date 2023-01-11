package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManualSharding
 * Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
**/
public class ManualSharding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTargetsForShard")
    public TestTargetsForShard[] testTargetsForShard;
    public ManualSharding withTestTargetsForShard(TestTargetsForShard[] testTargetsForShard) {
        this.testTargetsForShard = testTargetsForShard;
        return this;
    }
}