package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificateMapsResponse
 * Response for the `ListCertificateMaps` method.
**/
public class ListCertificateMapsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateMaps")
    public CertificateMap[] certificateMaps;
    public ListCertificateMapsResponse withCertificateMaps(CertificateMap[] certificateMaps) {
        this.certificateMaps = certificateMaps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCertificateMapsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCertificateMapsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}