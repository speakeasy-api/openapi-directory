package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsResponse
 * Response message for listing findings.
**/
public class ListFindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findings")
    public GoogleCloudSecuritycenterV1beta1Finding[] findings;
    public ListFindingsResponse withFindings(GoogleCloudSecuritycenterV1beta1Finding[] findings) {
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public ListFindingsResponse withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListFindingsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}