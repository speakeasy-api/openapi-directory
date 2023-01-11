package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGuardiansResponse
 * Response when listing guardians.
**/
public class ListGuardiansResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guardians")
    public Guardian[] guardians;
    public ListGuardiansResponse withGuardians(Guardian[] guardians) {
        this.guardians = guardians;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGuardiansResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}