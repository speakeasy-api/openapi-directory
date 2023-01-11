package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2EnvVarSource
 * EnvVarSource represents a source for the value of an EnvVar.
**/
public class GoogleCloudRunV2EnvVarSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretKeyRef")
    public GoogleCloudRunV2SecretKeySelector secretKeyRef;
    public GoogleCloudRunV2EnvVarSource withSecretKeyRef(GoogleCloudRunV2SecretKeySelector secretKeyRef) {
        this.secretKeyRef = secretKeyRef;
        return this;
    }
}