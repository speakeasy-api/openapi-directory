package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificateAuthoritiesResponse
 * Response message for CertificateAuthorityService.ListCertificateAuthorities.
**/
public class ListCertificateAuthoritiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthorities")
    public CertificateAuthority[] certificateAuthorities;
    public ListCertificateAuthoritiesResponse withCertificateAuthorities(CertificateAuthority[] certificateAuthorities) {
        this.certificateAuthorities = certificateAuthorities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCertificateAuthoritiesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCertificateAuthoritiesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}