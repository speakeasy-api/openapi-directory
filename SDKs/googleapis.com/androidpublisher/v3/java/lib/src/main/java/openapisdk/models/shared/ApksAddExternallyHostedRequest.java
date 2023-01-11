package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApksAddExternallyHostedRequest
 * Request to create a new externally hosted APK.
**/
public class ApksAddExternallyHostedRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externallyHostedApk")
    public ExternallyHostedApk externallyHostedApk;
    public ApksAddExternallyHostedRequest withExternallyHostedApk(ExternallyHostedApk externallyHostedApk) {
        this.externallyHostedApk = externallyHostedApk;
        return this;
    }
}