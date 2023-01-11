package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPatchJobInstanceDetailsResponse
 * A response message for listing the instances details for a patch job.
**/
public class ListPatchJobInstanceDetailsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPatchJobInstanceDetailsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchJobInstanceDetails")
    public PatchJobInstanceDetails[] patchJobInstanceDetails;
    public ListPatchJobInstanceDetailsResponse withPatchJobInstanceDetails(PatchJobInstanceDetails[] patchJobInstanceDetails) {
        this.patchJobInstanceDetails = patchJobInstanceDetails;
        return this;
    }
}