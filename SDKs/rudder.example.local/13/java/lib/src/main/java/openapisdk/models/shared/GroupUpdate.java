package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public GroupUpdate withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GroupUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GroupUpdate withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamic")
    public Boolean dynamic;
    public GroupUpdate withDynamic(Boolean dynamic) {
        this.dynamic = dynamic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GroupUpdate withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public GroupUpdateQuery query;
    public GroupUpdate withQuery(GroupUpdateQuery query) {
        this.query = query;
        return this;
    }
}