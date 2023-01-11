package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceNotFoundProblem
 * A problem that indicates that a given Tweet, User, etc. does not exist.
**/
public class ResourceNotFoundProblem {
    @JsonProperty("detail")
    public String detail;
    public ResourceNotFoundProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("parameter")
    public String parameter;
    public ResourceNotFoundProblem withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @JsonProperty("resource_id")
    public String resourceId;
    public ResourceNotFoundProblem withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("resource_type")
    public ResourceNotFoundProblemResourceTypeEnum resourceType;
    public ResourceNotFoundProblem withResourceType(ResourceNotFoundProblemResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ResourceNotFoundProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ResourceNotFoundProblem withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public Object value;
    public ResourceNotFoundProblem withValue(Object value) {
        this.value = value;
        return this;
    }
}