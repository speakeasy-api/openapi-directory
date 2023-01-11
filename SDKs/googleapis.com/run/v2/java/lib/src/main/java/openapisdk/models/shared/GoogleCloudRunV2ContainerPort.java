package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ContainerPort
 * ContainerPort represents a network port in a single container.
**/
public class GoogleCloudRunV2ContainerPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPort")
    public Integer containerPort;
    public GoogleCloudRunV2ContainerPort withContainerPort(Integer containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2ContainerPort withName(String name) {
        this.name = name;
        return this;
    }
}