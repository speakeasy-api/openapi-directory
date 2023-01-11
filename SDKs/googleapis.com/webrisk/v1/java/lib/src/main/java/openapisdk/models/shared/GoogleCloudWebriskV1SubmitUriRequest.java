package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1SubmitUriRequest
 * Request to send a potentially malicious URI to WebRisk.
**/
public class GoogleCloudWebriskV1SubmitUriRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submission")
    public GoogleCloudWebriskV1Submission submission;
    public GoogleCloudWebriskV1SubmitUriRequest withSubmission(GoogleCloudWebriskV1Submission submission) {
        this.submission = submission;
        return this;
    }
}