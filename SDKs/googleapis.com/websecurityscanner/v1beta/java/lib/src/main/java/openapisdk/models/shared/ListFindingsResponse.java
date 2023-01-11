package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsResponse
 * Response for the `ListFindings` method.
**/
public class ListFindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findings")
    public Finding[] findings;
    public ListFindingsResponse withFindings(Finding[] findings) {
        this.findings = findings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFindingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}