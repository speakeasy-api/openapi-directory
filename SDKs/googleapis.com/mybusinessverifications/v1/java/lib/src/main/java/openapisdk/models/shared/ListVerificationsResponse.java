package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVerificationsResponse
 * Response message for Verifications.ListVerifications.
**/
public class ListVerificationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVerificationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifications")
    public Verification[] verifications;
    public ListVerificationsResponse withVerifications(Verification[] verifications) {
        this.verifications = verifications;
        return this;
    }
}