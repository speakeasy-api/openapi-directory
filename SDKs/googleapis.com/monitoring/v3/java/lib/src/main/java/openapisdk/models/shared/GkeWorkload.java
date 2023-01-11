package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeWorkload
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
public class GkeWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public GkeWorkload withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public GkeWorkload withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceName")
    public String namespaceName;
    public GkeWorkload withNamespaceName(String namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GkeWorkload withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topLevelControllerName")
    public String topLevelControllerName;
    public GkeWorkload withTopLevelControllerName(String topLevelControllerName) {
        this.topLevelControllerName = topLevelControllerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topLevelControllerType")
    public String topLevelControllerType;
    public GkeWorkload withTopLevelControllerType(String topLevelControllerType) {
        this.topLevelControllerType = topLevelControllerType;
        return this;
    }
}