package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationSamlIdpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sloLogoutUrl")
    public String sloLogoutUrl;
    public UpdateOrganizationSamlIdpRequestBody withSloLogoutUrl(String sloLogoutUrl) {
        this.sloLogoutUrl = sloLogoutUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x509certSha1Fingerprint")
    public String x509certSha1Fingerprint;
    public UpdateOrganizationSamlIdpRequestBody withX509certSha1Fingerprint(String x509certSha1Fingerprint) {
        this.x509certSha1Fingerprint = x509certSha1Fingerprint;
        return this;
    }
}