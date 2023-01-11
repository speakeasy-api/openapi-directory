package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestTiming
 * Testing timing break down to know phases.
**/
public class TestTiming {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testProcessDuration")
    public Duration testProcessDuration;
    public TestTiming withTestProcessDuration(Duration testProcessDuration) {
        this.testProcessDuration = testProcessDuration;
        return this;
    }
}