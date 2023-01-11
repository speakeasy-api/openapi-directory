package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public RetrieveAPage200ApplicationJson withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public RetrieveAPage200ApplicationJson withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAPage200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_edited_time")
    public String lastEditedTime;
    public RetrieveAPage200ApplicationJson withLastEditedTime(String lastEditedTime) {
        this.lastEditedTime = lastEditedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public RetrieveAPage200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public RetrieveAPage200ApplicationJsonParent parent;
    public RetrieveAPage200ApplicationJson withParent(RetrieveAPage200ApplicationJsonParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public RetrieveAPage200ApplicationJsonProperties properties;
    public RetrieveAPage200ApplicationJson withProperties(RetrieveAPage200ApplicationJsonProperties properties) {
        this.properties = properties;
        return this;
    }
}