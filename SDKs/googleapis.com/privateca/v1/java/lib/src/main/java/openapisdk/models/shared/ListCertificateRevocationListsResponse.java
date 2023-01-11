package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificateRevocationListsResponse
 * Response message for CertificateAuthorityService.ListCertificateRevocationLists.
**/
public class ListCertificateRevocationListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateRevocationLists")
    public CertificateRevocationList[] certificateRevocationLists;
    public ListCertificateRevocationListsResponse withCertificateRevocationLists(CertificateRevocationList[] certificateRevocationLists) {
        this.certificateRevocationLists = certificateRevocationLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCertificateRevocationListsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCertificateRevocationListsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}