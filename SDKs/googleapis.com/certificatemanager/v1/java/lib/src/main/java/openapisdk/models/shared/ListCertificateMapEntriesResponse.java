package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificateMapEntriesResponse
 * Response for the `ListCertificateMapEntries` method.
**/
public class ListCertificateMapEntriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateMapEntries")
    public CertificateMapEntry[] certificateMapEntries;
    public ListCertificateMapEntriesResponse withCertificateMapEntries(CertificateMapEntry[] certificateMapEntries) {
        this.certificateMapEntries = certificateMapEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCertificateMapEntriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCertificateMapEntriesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}