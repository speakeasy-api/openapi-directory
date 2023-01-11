package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestTargetsForShard
 * Test targets for a shard.
**/
public class TestTargetsForShard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTargets")
    public String[] testTargets;
    public TestTargetsForShard withTestTargets(String[] testTargets) {
        this.testTargets = testTargets;
        return this;
    }
}