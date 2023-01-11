package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ListRevisionsResponse
 * Response message containing a list of Revisions.
**/
public class GoogleCloudRunV2ListRevisionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRunV2ListRevisionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisions")
    public GoogleCloudRunV2Revision[] revisions;
    public GoogleCloudRunV2ListRevisionsResponse withRevisions(GoogleCloudRunV2Revision[] revisions) {
        this.revisions = revisions;
        return this;
    }
}