package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1ListViolationsResponse
 * Response of ListViolations endpoint.
**/
public class GoogleCloudAssuredworkloadsV1ListViolationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudAssuredworkloadsV1ListViolationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violations")
    public GoogleCloudAssuredworkloadsV1Violation[] violations;
    public GoogleCloudAssuredworkloadsV1ListViolationsResponse withViolations(GoogleCloudAssuredworkloadsV1Violation[] violations) {
        this.violations = violations;
        return this;
    }
}