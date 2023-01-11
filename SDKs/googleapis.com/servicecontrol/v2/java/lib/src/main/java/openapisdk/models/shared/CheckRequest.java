package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckRequest
 * Request message for the Check method.
**/
public class CheckRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AttributeContext attributes;
    public CheckRequest withAttributes(AttributeContext attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public String flags;
    public CheckRequest withFlags(String flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public ResourceInfo[] resources;
    public CheckRequest withResources(ResourceInfo[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public CheckRequest withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
}