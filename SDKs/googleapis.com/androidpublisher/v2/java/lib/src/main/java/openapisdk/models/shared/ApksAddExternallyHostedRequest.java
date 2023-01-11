package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApksAddExternallyHostedRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externallyHostedApk")
    public ExternallyHostedApk externallyHostedApk;
    public ApksAddExternallyHostedRequest withExternallyHostedApk(ExternallyHostedApk externallyHostedApk) {
        this.externallyHostedApk = externallyHostedApk;
        return this;
    }
}