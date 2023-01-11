package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public UpdatePageProperties200ApplicationJson withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public UpdatePageProperties200ApplicationJson withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_edited_time")
    public String lastEditedTime;
    public UpdatePageProperties200ApplicationJson withLastEditedTime(String lastEditedTime) {
        this.lastEditedTime = lastEditedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public UpdatePageProperties200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public UpdatePageProperties200ApplicationJsonParent parent;
    public UpdatePageProperties200ApplicationJson withParent(UpdatePageProperties200ApplicationJsonParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public UpdatePageProperties200ApplicationJsonProperties properties;
    public UpdatePageProperties200ApplicationJson withProperties(UpdatePageProperties200ApplicationJsonProperties properties) {
        this.properties = properties;
        return this;
    }
}