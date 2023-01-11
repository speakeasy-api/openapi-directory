package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationSamlIdpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sloLogoutUrl")
    public String sloLogoutUrl;
    public CreateOrganizationSamlIdpRequestBody withSloLogoutUrl(String sloLogoutUrl) {
        this.sloLogoutUrl = sloLogoutUrl;
        return this;
    }
    @JsonProperty("x509certSha1Fingerprint")
    public String x509certSha1Fingerprint;
    public CreateOrganizationSamlIdpRequestBody withX509certSha1Fingerprint(String x509certSha1Fingerprint) {
        this.x509certSha1Fingerprint = x509certSha1Fingerprint;
        return this;
    }
}