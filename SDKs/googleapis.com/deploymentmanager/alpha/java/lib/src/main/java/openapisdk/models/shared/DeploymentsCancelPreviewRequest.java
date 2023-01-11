package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeploymentsCancelPreviewRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public DeploymentsCancelPreviewRequest withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
}