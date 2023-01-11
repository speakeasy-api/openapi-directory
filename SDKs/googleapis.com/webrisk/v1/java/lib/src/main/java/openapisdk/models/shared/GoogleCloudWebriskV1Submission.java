package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1Submission
 * Wraps a URI that might be displaying malicious content.
**/
public class GoogleCloudWebriskV1Submission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatTypes")
    public GoogleCloudWebriskV1SubmissionThreatTypesEnum[] threatTypes;
    public GoogleCloudWebriskV1Submission withThreatTypes(GoogleCloudWebriskV1SubmissionThreatTypesEnum[] threatTypes) {
        this.threatTypes = threatTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudWebriskV1Submission withUri(String uri) {
        this.uri = uri;
        return this;
    }
}