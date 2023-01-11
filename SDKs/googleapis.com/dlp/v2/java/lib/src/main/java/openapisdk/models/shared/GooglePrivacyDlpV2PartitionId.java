package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2PartitionId
 * Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.
**/
public class GooglePrivacyDlpV2PartitionId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceId")
    public String namespaceId;
    public GooglePrivacyDlpV2PartitionId withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GooglePrivacyDlpV2PartitionId withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}