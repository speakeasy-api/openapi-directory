package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeMasterInfo
 * For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
**/
public class GkeMasterInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterNetworkUri")
    public String clusterNetworkUri;
    public GkeMasterInfo withClusterNetworkUri(String clusterNetworkUri) {
        this.clusterNetworkUri = clusterNetworkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterUri")
    public String clusterUri;
    public GkeMasterInfo withClusterUri(String clusterUri) {
        this.clusterUri = clusterUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIp")
    public String externalIp;
    public GkeMasterInfo withExternalIp(String externalIp) {
        this.externalIp = externalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIp")
    public String internalIp;
    public GkeMasterInfo withInternalIp(String internalIp) {
        this.internalIp = internalIp;
        return this;
    }
}