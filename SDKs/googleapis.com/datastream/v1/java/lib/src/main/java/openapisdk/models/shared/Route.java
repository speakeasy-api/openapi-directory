package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Route
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
**/
public class Route {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Route withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationAddress")
    public String destinationAddress;
    public Route withDestinationAddress(String destinationAddress) {
        this.destinationAddress = destinationAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationPort")
    public Integer destinationPort;
    public Route withDestinationPort(Integer destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Route withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Route withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Route withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Route withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}