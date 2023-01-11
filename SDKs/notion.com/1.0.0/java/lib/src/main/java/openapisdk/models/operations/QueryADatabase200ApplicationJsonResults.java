package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public QueryADatabase200ApplicationJsonResults withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public QueryADatabase200ApplicationJsonResults withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResults withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_edited_time")
    public String lastEditedTime;
    public QueryADatabase200ApplicationJsonResults withLastEditedTime(String lastEditedTime) {
        this.lastEditedTime = lastEditedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public QueryADatabase200ApplicationJsonResults withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public QueryADatabase200ApplicationJsonResultsParent parent;
    public QueryADatabase200ApplicationJsonResults withParent(QueryADatabase200ApplicationJsonResultsParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public QueryADatabase200ApplicationJsonResultsProperties properties;
    public QueryADatabase200ApplicationJsonResults withProperties(QueryADatabase200ApplicationJsonResultsProperties properties) {
        this.properties = properties;
        return this;
    }
}