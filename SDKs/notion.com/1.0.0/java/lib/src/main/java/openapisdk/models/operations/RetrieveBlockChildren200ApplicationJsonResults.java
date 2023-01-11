package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveBlockChildren200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public RetrieveBlockChildren200ApplicationJsonResults withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_children")
    public Boolean hasChildren;
    public RetrieveBlockChildren200ApplicationJsonResults withHasChildren(Boolean hasChildren) {
        this.hasChildren = hasChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveBlockChildren200ApplicationJsonResults withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_edited_time")
    public String lastEditedTime;
    public RetrieveBlockChildren200ApplicationJsonResults withLastEditedTime(String lastEditedTime) {
        this.lastEditedTime = lastEditedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public RetrieveBlockChildren200ApplicationJsonResults withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveBlockChildren200ApplicationJsonResults withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsupported")
    public java.util.Map<String, Object> unsupported;
    public RetrieveBlockChildren200ApplicationJsonResults withUnsupported(java.util.Map<String, Object> unsupported) {
        this.unsupported = unsupported;
        return this;
    }
}