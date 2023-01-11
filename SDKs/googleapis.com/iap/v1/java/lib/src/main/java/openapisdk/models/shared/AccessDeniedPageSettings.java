package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessDeniedPageSettings
 * Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
**/
public class AccessDeniedPageSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDeniedPageUri")
    public String accessDeniedPageUri;
    public AccessDeniedPageSettings withAccessDeniedPageUri(String accessDeniedPageUri) {
        this.accessDeniedPageUri = accessDeniedPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generateTroubleshootingUri")
    public Boolean generateTroubleshootingUri;
    public AccessDeniedPageSettings withGenerateTroubleshootingUri(Boolean generateTroubleshootingUri) {
        this.generateTroubleshootingUri = generateTroubleshootingUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remediationTokenGenerationEnabled")
    public Boolean remediationTokenGenerationEnabled;
    public AccessDeniedPageSettings withRemediationTokenGenerationEnabled(Boolean remediationTokenGenerationEnabled) {
        this.remediationTokenGenerationEnabled = remediationTokenGenerationEnabled;
        return this;
    }
}