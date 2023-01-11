package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateABlock200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public UpdateABlock200ApplicationJson withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_children")
    public Boolean hasChildren;
    public UpdateABlock200ApplicationJson withHasChildren(Boolean hasChildren) {
        this.hasChildren = hasChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateABlock200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_edited_time")
    public String lastEditedTime;
    public UpdateABlock200ApplicationJson withLastEditedTime(String lastEditedTime) {
        this.lastEditedTime = lastEditedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public UpdateABlock200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paragraph")
    public UpdateABlock200ApplicationJsonParagraph paragraph;
    public UpdateABlock200ApplicationJson withParagraph(UpdateABlock200ApplicationJsonParagraph paragraph) {
        this.paragraph = paragraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateABlock200ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}