package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableClusterInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WritableClusterInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableClusterInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Long group;
    public WritableClusterInput withGroup(Long group) {
        this.group = group;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableClusterInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public Long site;
    public WritableClusterInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableClusterInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public WritableClusterInput withType(Long type) {
        this.type = type;
        return this;
    }
}