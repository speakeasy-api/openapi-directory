package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupKind
 * This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore.
**/
public class GroupKind {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroup")
    public String resourceGroup;
    public GroupKind withResourceGroup(String resourceGroup) {
        this.resourceGroup = resourceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceKind")
    public String resourceKind;
    public GroupKind withResourceKind(String resourceKind) {
        this.resourceKind = resourceKind;
        return this;
    }
}