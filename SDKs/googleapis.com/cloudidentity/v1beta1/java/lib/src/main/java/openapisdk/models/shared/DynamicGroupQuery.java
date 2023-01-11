package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicGroupQuery
 * Defines a query on a resource.
**/
public class DynamicGroupQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public DynamicGroupQuery withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public DynamicGroupQueryResourceTypeEnum resourceType;
    public DynamicGroupQuery withResourceType(DynamicGroupQueryResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}