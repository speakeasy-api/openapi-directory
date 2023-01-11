package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAuthorizedCertificatesResponse
 * Response message for AuthorizedCertificates.ListAuthorizedCertificates.
**/
public class ListAuthorizedCertificatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public AuthorizedCertificate[] certificates;
    public ListAuthorizedCertificatesResponse withCertificates(AuthorizedCertificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAuthorizedCertificatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}