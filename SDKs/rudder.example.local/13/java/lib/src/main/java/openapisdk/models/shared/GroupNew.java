package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupNew {
    @JsonProperty("category")
    public String category;
    public GroupNew withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GroupNew withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("displayName")
    public String displayName;
    public GroupNew withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamic")
    public Boolean dynamic;
    public GroupNew withDynamic(Boolean dynamic) {
        this.dynamic = dynamic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GroupNew withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GroupNew withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GroupNewProperties[] properties;
    public GroupNew withProperties(GroupNewProperties[] properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public GroupNewQuery query;
    public GroupNew withQuery(GroupNewQuery query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public GroupNew withSource(String source) {
        this.source = source;
        return this;
    }
}