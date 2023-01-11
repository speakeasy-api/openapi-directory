package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZoneServiceDirectoryConfigNamespace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletionTime")
    public String deletionTime;
    public ManagedZoneServiceDirectoryConfigNamespace withDeletionTime(String deletionTime) {
        this.deletionTime = deletionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZoneServiceDirectoryConfigNamespace withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceUrl")
    public String namespaceUrl;
    public ManagedZoneServiceDirectoryConfigNamespace withNamespaceUrl(String namespaceUrl) {
        this.namespaceUrl = namespaceUrl;
        return this;
    }
}