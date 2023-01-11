package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendBlockChildren200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("child_page")
    public AppendBlockChildren200ApplicationJsonChildPage childPage;
    public AppendBlockChildren200ApplicationJson withChildPage(AppendBlockChildren200ApplicationJsonChildPage childPage) {
        this.childPage = childPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public AppendBlockChildren200ApplicationJson withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_children")
    public Boolean hasChildren;
    public AppendBlockChildren200ApplicationJson withHasChildren(Boolean hasChildren) {
        this.hasChildren = hasChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AppendBlockChildren200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_edited_time")
    public String lastEditedTime;
    public AppendBlockChildren200ApplicationJson withLastEditedTime(String lastEditedTime) {
        this.lastEditedTime = lastEditedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public AppendBlockChildren200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AppendBlockChildren200ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}