package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCertificateTemplatesResponse
 * Response message for CertificateAuthorityService.ListCertificateTemplates.
**/
public class ListCertificateTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateTemplates")
    public CertificateTemplate[] certificateTemplates;
    public ListCertificateTemplatesResponse withCertificateTemplates(CertificateTemplate[] certificateTemplates) {
        this.certificateTemplates = certificateTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCertificateTemplatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCertificateTemplatesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}