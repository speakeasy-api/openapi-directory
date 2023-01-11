package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2RunJobRequest
 * Request message to create a new Execution of a Job.
**/
public class GoogleCloudRunV2RunJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRunV2RunJobRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public GoogleCloudRunV2RunJobRequest withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}