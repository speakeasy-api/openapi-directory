package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeFullOs
 * Information about the operating system
**/
public class NodeFullOs {
    @JsonProperty("fullName")
    public String fullName;
    public NodeFullOs withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("kernelVersion")
    public String kernelVersion;
    public NodeFullOs withKernelVersion(String kernelVersion) {
        this.kernelVersion = kernelVersion;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NodeFullOs withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicePack")
    public String servicePack;
    public NodeFullOs withServicePack(String servicePack) {
        this.servicePack = servicePack;
        return this;
    }
    @JsonProperty("type")
    public NodeFullOsTypeEnum type;
    public NodeFullOs withType(NodeFullOsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public NodeFullOs withVersion(String version) {
        this.version = version;
        return this;
    }
}