package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Group {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Group withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Group withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamic")
    public Boolean dynamic;
    public Group withDynamic(Boolean dynamic) {
        this.dynamic = dynamic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public Group withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupClass")
    public String[] groupClass;
    public Group withGroupClass(String[] groupClass) {
        this.groupClass = groupClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Group withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeIds")
    public String[] nodeIds;
    public Group withNodeIds(String[] nodeIds) {
        this.nodeIds = nodeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GroupProperties[] properties;
    public Group withProperties(GroupProperties[] properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public GroupQuery query;
    public Group withQuery(GroupQuery query) {
        this.query = query;
        return this;
    }
}