package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerPort
 * ContainerPort represents a network port in a single container.
**/
public class ContainerPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPort")
    public Integer containerPort;
    public ContainerPort withContainerPort(Integer containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContainerPort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public ContainerPort withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
}