package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteVerificationWebResourceGettokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public SiteVerificationWebResourceGettokenRequestSite site;
    public SiteVerificationWebResourceGettokenRequest withSite(SiteVerificationWebResourceGettokenRequestSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationMethod")
    public String verificationMethod;
    public SiteVerificationWebResourceGettokenRequest withVerificationMethod(String verificationMethod) {
        this.verificationMethod = verificationMethod;
        return this;
    }
}