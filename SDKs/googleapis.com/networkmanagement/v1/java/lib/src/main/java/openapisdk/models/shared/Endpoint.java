package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Endpoint
 * Source or destination of the Connectivity Test.
**/
public class Endpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineVersion")
    public AppEngineVersionEndpoint appEngineVersion;
    public Endpoint withAppEngineVersion(AppEngineVersionEndpoint appEngineVersion) {
        this.appEngineVersion = appEngineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudFunction")
    public CloudFunctionEndpoint cloudFunction;
    public Endpoint withCloudFunction(CloudFunctionEndpoint cloudFunction) {
        this.cloudFunction = cloudFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRunRevision")
    public CloudRunRevisionEndpoint cloudRunRevision;
    public Endpoint withCloudRunRevision(CloudRunRevisionEndpoint cloudRunRevision) {
        this.cloudRunRevision = cloudRunRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlInstance")
    public String cloudSqlInstance;
    public Endpoint withCloudSqlInstance(String cloudSqlInstance) {
        this.cloudSqlInstance = cloudSqlInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeMasterCluster")
    public String gkeMasterCluster;
    public Endpoint withGkeMasterCluster(String gkeMasterCluster) {
        this.gkeMasterCluster = gkeMasterCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public Endpoint withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public Endpoint withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public Endpoint withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkType")
    public EndpointNetworkTypeEnum networkType;
    public Endpoint withNetworkType(EndpointNetworkTypeEnum networkType) {
        this.networkType = networkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public Endpoint withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Endpoint withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}