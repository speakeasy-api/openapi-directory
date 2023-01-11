package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartScreenshotSuccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test_id")
    public String testId;
    public StartScreenshotSuccess withTestId(String testId) {
        this.testId = testId;
        return this;
    }
}