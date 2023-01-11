package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificateIssuanceConfigsResponse
 * Response for the `ListCertificateIssuanceConfigs` method.
**/
public class ListCertificateIssuanceConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateIssuanceConfigs")
    public CertificateIssuanceConfig[] certificateIssuanceConfigs;
    public ListCertificateIssuanceConfigsResponse withCertificateIssuanceConfigs(CertificateIssuanceConfig[] certificateIssuanceConfigs) {
        this.certificateIssuanceConfigs = certificateIssuanceConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCertificateIssuanceConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCertificateIssuanceConfigsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}