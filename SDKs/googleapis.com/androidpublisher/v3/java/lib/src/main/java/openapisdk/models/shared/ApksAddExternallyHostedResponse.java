package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApksAddExternallyHostedResponse
 * Response for creating a new externally hosted APK.
**/
public class ApksAddExternallyHostedResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externallyHostedApk")
    public ExternallyHostedApk externallyHostedApk;
    public ApksAddExternallyHostedResponse withExternallyHostedApk(ExternallyHostedApk externallyHostedApk) {
        this.externallyHostedApk = externallyHostedApk;
        return this;
    }
}