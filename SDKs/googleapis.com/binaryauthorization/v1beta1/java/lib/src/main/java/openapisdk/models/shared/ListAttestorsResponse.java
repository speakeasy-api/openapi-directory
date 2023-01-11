package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAttestorsResponse
 * Response message for BinauthzManagementService.ListAttestors.
**/
public class ListAttestorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestors")
    public Attestor[] attestors;
    public ListAttestorsResponse withAttestors(Attestor[] attestors) {
        this.attestors = attestors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAttestorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}