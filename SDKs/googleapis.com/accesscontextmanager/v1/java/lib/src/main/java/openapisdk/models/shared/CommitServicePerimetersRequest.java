package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommitServicePerimetersRequest
 * A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy.
**/
public class CommitServicePerimetersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public CommitServicePerimetersRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
}