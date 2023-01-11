package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceConfigInput
 * Configuration parameters for a new instance.
**/
public class InstanceConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNetworksEnabled")
    public Boolean accountNetworksEnabled;
    public InstanceConfigInput withAccountNetworksEnabled(Boolean accountNetworksEnabled) {
        this.accountNetworksEnabled = accountNetworksEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientNetwork")
    public NetworkAddress clientNetwork;
    public InstanceConfigInput withClientNetwork(NetworkAddress clientNetwork) {
        this.clientNetwork = clientNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hyperthreading")
    public Boolean hyperthreading;
    public InstanceConfigInput withHyperthreading(Boolean hyperthreading) {
        this.hyperthreading = hyperthreading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public InstanceConfigInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public InstanceConfigInput withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logicalInterfaces")
    public GoogleCloudBaremetalsolutionV2LogicalInterface[] logicalInterfaces;
    public InstanceConfigInput withLogicalInterfaces(GoogleCloudBaremetalsolutionV2LogicalInterface[] logicalInterfaces) {
        this.logicalInterfaces = logicalInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public InstanceConfigNetworkConfigEnum networkConfig;
    public InstanceConfigInput withNetworkConfig(InstanceConfigNetworkConfigEnum networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTemplate")
    public String networkTemplate;
    public InstanceConfigInput withNetworkTemplate(String networkTemplate) {
        this.networkTemplate = networkTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osImage")
    public String osImage;
    public InstanceConfigInput withOsImage(String osImage) {
        this.osImage = osImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateNetwork")
    public NetworkAddress privateNetwork;
    public InstanceConfigInput withPrivateNetwork(NetworkAddress privateNetwork) {
        this.privateNetwork = privateNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userNote")
    public String userNote;
    public InstanceConfigInput withUserNote(String userNote) {
        this.userNote = userNote;
        return this;
    }
}