package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public UpdateADatabase200ApplicationJson withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateADatabase200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_edited_time")
    public String lastEditedTime;
    public UpdateADatabase200ApplicationJson withLastEditedTime(String lastEditedTime) {
        this.lastEditedTime = lastEditedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public UpdateADatabase200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public UpdateADatabase200ApplicationJsonParent parent;
    public UpdateADatabase200ApplicationJson withParent(UpdateADatabase200ApplicationJsonParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public UpdateADatabase200ApplicationJsonProperties properties;
    public UpdateADatabase200ApplicationJson withProperties(UpdateADatabase200ApplicationJsonProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public UpdateADatabase200ApplicationJsonTitle[] title;
    public UpdateADatabase200ApplicationJson withTitle(UpdateADatabase200ApplicationJsonTitle[] title) {
        this.title = title;
        return this;
    }
}