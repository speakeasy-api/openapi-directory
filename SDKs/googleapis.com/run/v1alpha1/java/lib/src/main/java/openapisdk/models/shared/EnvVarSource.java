package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvVarSource
 * EnvVarSource represents a source for the value of an EnvVar.
**/
public class EnvVarSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configMapKeyRef")
    public ConfigMapKeySelector configMapKeyRef;
    public EnvVarSource withConfigMapKeyRef(ConfigMapKeySelector configMapKeyRef) {
        this.configMapKeyRef = configMapKeyRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretKeyRef")
    public SecretKeySelector secretKeyRef;
    public EnvVarSource withSecretKeyRef(SecretKeySelector secretKeyRef) {
        this.secretKeyRef = secretKeyRef;
        return this;
    }
}