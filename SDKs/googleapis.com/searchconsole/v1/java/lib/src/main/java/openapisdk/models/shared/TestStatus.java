package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestStatus
 * Final state of the test, including error details if necessary.
**/
public class TestStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public TestStatus withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TestStatusStatusEnum status;
    public TestStatus withStatus(TestStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}