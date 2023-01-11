package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeNamespace
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
**/
public class GkeNamespace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public GkeNamespace withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public GkeNamespace withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceName")
    public String namespaceName;
    public GkeNamespace withNamespaceName(String namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GkeNamespace withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}