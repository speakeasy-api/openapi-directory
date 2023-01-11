package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisallowedResourceProblem
 * A problem that indicates that the resource requested violates the precepts of this API.
**/
public class DisallowedResourceProblem {
    @JsonProperty("detail")
    public String detail;
    public DisallowedResourceProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("resource_id")
    public String resourceId;
    public DisallowedResourceProblem withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("resource_type")
    public DisallowedResourceProblemResourceTypeEnum resourceType;
    public DisallowedResourceProblem withResourceType(DisallowedResourceProblemResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("section")
    public DisallowedResourceProblemSectionEnum section;
    public DisallowedResourceProblem withSection(DisallowedResourceProblemSectionEnum section) {
        this.section = section;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public DisallowedResourceProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public DisallowedResourceProblem withType(String type) {
        this.type = type;
        return this;
    }
}