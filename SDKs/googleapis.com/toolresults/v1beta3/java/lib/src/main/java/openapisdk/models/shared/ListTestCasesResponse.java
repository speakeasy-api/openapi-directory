package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTestCasesResponse
 * Response message for StepService.ListTestCases.
**/
public class ListTestCasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTestCasesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCases")
    public TestCase[] testCases;
    public ListTestCasesResponse withTestCases(TestCase[] testCases) {
        this.testCases = testCases;
        return this;
    }
}