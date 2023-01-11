package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificatesResponse
 * Response message for CertificateAuthorityService.ListCertificates.
**/
public class ListCertificatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public Certificate[] certificates;
    public ListCertificatesResponse withCertificates(Certificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCertificatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCertificatesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}