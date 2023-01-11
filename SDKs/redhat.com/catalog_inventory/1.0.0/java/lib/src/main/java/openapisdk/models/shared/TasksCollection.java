package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TasksCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Task[] data;
    public TasksCollection withData(Task[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CollectionLinks links;
    public TasksCollection withLinks(CollectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CollectionMetadata meta;
    public TasksCollection withMeta(CollectionMetadata meta) {
        this.meta = meta;
        return this;
    }
}