package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevisionCheckResponse
 * A third party checking a revision response.
**/
public class RevisionCheckResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiVersion")
    public String apiVersion;
    public RevisionCheckResponse withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RevisionCheckResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionStatus")
    public RevisionCheckResponseRevisionStatusEnum revisionStatus;
    public RevisionCheckResponse withRevisionStatus(RevisionCheckResponseRevisionStatusEnum revisionStatus) {
        this.revisionStatus = revisionStatus;
        return this;
    }
}