package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyDownloadAccountRequest
 * Request to download user account in batch.
**/
public class IdentitytoolkitRelyingpartyDownloadAccountRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedProjectNumber")
    public String delegatedProjectNumber;
    public IdentitytoolkitRelyingpartyDownloadAccountRequest withDelegatedProjectNumber(String delegatedProjectNumber) {
        this.delegatedProjectNumber = delegatedProjectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public IdentitytoolkitRelyingpartyDownloadAccountRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public IdentitytoolkitRelyingpartyDownloadAccountRequest withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProjectId")
    public String targetProjectId;
    public IdentitytoolkitRelyingpartyDownloadAccountRequest withTargetProjectId(String targetProjectId) {
        this.targetProjectId = targetProjectId;
        return this;
    }
}