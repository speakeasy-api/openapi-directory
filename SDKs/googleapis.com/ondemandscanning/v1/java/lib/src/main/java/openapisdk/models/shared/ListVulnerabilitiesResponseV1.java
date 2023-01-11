package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVulnerabilitiesResponseV1
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
**/
public class ListVulnerabilitiesResponseV1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVulnerabilitiesResponseV1 withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrences")
    public Occurrence[] occurrences;
    public ListVulnerabilitiesResponseV1 withOccurrences(Occurrence[] occurrences) {
        this.occurrences = occurrences;
        return this;
    }
}