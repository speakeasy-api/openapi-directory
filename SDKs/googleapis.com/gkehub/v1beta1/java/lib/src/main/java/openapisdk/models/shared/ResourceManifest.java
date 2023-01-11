package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceManifest
 * ResourceManifest represents a single Kubernetes resource to be applied to the cluster.
**/
public class ResourceManifest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterScoped")
    public Boolean clusterScoped;
    public ResourceManifest withClusterScoped(Boolean clusterScoped) {
        this.clusterScoped = clusterScoped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest")
    public String manifest;
    public ResourceManifest withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
}