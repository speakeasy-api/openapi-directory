package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Node
 * Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]
**/
public class Node {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildVersion")
    public String buildVersion;
    public Node withBuildVersion(String buildVersion) {
        this.buildVersion = buildVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientFeatures")
    public String[] clientFeatures;
    public Node withClientFeatures(String[] clientFeatures) {
        this.clientFeatures = clientFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public Node withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extensions")
    public Extension[] extensions;
    public Node withExtensions(Extension[] extensions) {
        this.extensions = extensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Node withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listeningAddresses")
    public Address[] listeningAddresses;
    public Node withListeningAddresses(Address[] listeningAddresses) {
        this.listeningAddresses = listeningAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public Locality locality;
    public Node withLocality(Locality locality) {
        this.locality = locality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public Node withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgentBuildVersion")
    public BuildVersion userAgentBuildVersion;
    public Node withUserAgentBuildVersion(BuildVersion userAgentBuildVersion) {
        this.userAgentBuildVersion = userAgentBuildVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgentName")
    public String userAgentName;
    public Node withUserAgentName(String userAgentName) {
        this.userAgentName = userAgentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgentVersion")
    public String userAgentVersion;
    public Node withUserAgentVersion(String userAgentVersion) {
        this.userAgentVersion = userAgentVersion;
        return this;
    }
}