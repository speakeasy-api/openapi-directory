package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ToolOutputReference
 * A reference to a ToolExecution output file.
**/
public class ToolOutputReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Timestamp creationTime;
    public ToolOutputReference withCreationTime(Timestamp creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public FileReference output;
    public ToolOutputReference withOutput(FileReference output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCase")
    public TestCaseReference testCase;
    public ToolOutputReference withTestCase(TestCaseReference testCase) {
        this.testCase = testCase;
        return this;
    }
}