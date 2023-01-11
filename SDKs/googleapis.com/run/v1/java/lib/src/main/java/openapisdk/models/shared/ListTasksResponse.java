package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTasksResponse
 * ListTasksResponse is a list of Tasks resources.
**/
public class ListTasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiVersion")
    public String apiVersion;
    public ListTasksResponse withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Task[] items;
    public ListTasksResponse withItems(Task[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ListTasksResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ListMeta metadata;
    public ListTasksResponse withMetadata(ListMeta metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListTasksResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}