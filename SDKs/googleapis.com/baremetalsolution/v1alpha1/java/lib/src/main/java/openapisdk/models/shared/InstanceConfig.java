package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceConfig
 * Configuration parameters for a new instance.
**/
public class InstanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientNetwork")
    public NetworkAddress clientNetwork;
    public InstanceConfig withClientNetwork(NetworkAddress clientNetwork) {
        this.clientNetwork = clientNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hyperthreading")
    public Boolean hyperthreading;
    public InstanceConfig withHyperthreading(Boolean hyperthreading) {
        this.hyperthreading = hyperthreading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public InstanceConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public InstanceConfig withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public InstanceConfig withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osImage")
    public String osImage;
    public InstanceConfig withOsImage(String osImage) {
        this.osImage = osImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateNetwork")
    public NetworkAddress privateNetwork;
    public InstanceConfig withPrivateNetwork(NetworkAddress privateNetwork) {
        this.privateNetwork = privateNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userNote")
    public String userNote;
    public InstanceConfig withUserNote(String userNote) {
        this.userNote = userNote;
        return this;
    }
}