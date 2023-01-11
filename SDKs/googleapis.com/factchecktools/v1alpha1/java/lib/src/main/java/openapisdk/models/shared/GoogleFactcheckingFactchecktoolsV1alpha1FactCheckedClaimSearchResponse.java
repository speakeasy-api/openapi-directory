package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
 * Response from searching fact-checked claims.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claims")
    public GoogleFactcheckingFactchecktoolsV1alpha1Claim[] claims;
    public GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse withClaims(GoogleFactcheckingFactchecktoolsV1alpha1Claim[] claims) {
        this.claims = claims;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}