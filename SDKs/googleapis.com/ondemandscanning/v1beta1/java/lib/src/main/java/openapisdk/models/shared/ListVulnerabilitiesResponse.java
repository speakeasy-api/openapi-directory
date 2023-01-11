package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVulnerabilitiesResponse
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
**/
public class ListVulnerabilitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVulnerabilitiesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrences")
    public Occurrence[] occurrences;
    public ListVulnerabilitiesResponse withOccurrences(Occurrence[] occurrences) {
        this.occurrences = occurrences;
        return this;
    }
}