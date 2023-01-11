package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceOptions
 * ResourceOptions represent options for Kubernetes resource generation.
**/
public class ResourceOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectVersion")
    public String connectVersion;
    public ResourceOptions withConnectVersion(String connectVersion) {
        this.connectVersion = connectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("k8sVersion")
    public String k8sVersion;
    public ResourceOptions withK8sVersion(String k8sVersion) {
        this.k8sVersion = k8sVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v1beta1Crd")
    public Boolean v1beta1Crd;
    public ResourceOptions withV1beta1Crd(Boolean v1beta1Crd) {
        this.v1beta1Crd = v1beta1Crd;
        return this;
    }
}