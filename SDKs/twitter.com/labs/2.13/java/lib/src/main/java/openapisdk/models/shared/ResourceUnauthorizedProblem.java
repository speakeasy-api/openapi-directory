package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceUnauthorizedProblem
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc.
**/
public class ResourceUnauthorizedProblem {
    @JsonProperty("detail")
    public String detail;
    public ResourceUnauthorizedProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("resource_id")
    public String resourceId;
    public ResourceUnauthorizedProblem withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("resource_type")
    public ResourceUnauthorizedProblemResourceTypeEnum resourceType;
    public ResourceUnauthorizedProblem withResourceType(ResourceUnauthorizedProblemResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("section")
    public ResourceUnauthorizedProblemSectionEnum section;
    public ResourceUnauthorizedProblem withSection(ResourceUnauthorizedProblemSectionEnum section) {
        this.section = section;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ResourceUnauthorizedProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ResourceUnauthorizedProblem withType(String type) {
        this.type = type;
        return this;
    }
}