package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFloatingIpsCreateFloatingIpRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostFloatingIpsCreateFloatingIpRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_location")
    public String homeLocation;
    public PostFloatingIpsCreateFloatingIpRequest withHomeLocation(String homeLocation) {
        this.homeLocation = homeLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostFloatingIpsCreateFloatingIpRequest withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostFloatingIpsCreateFloatingIpRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public Long server;
    public PostFloatingIpsCreateFloatingIpRequest withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public PostFloatingIpsCreateFloatingIpRequestTypeEnum type;
    public PostFloatingIpsCreateFloatingIpRequest withType(PostFloatingIpsCreateFloatingIpRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}