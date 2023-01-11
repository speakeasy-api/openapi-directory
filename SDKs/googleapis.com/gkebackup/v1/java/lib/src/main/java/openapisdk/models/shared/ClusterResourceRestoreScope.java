package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterResourceRestoreScope
 * Identifies the cluster-scoped resources to restore from the Backup.
**/
public class ClusterResourceRestoreScope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedGroupKinds")
    public GroupKind[] selectedGroupKinds;
    public ClusterResourceRestoreScope withSelectedGroupKinds(GroupKind[] selectedGroupKinds) {
        this.selectedGroupKinds = selectedGroupKinds;
        return this;
    }
}