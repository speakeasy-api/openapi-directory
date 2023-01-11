package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListConversations200ApplicationJson {
    @JsonProperty("_embedded")
    public ListConversations200ApplicationJsonEmbedded embedded;
    public ListConversations200ApplicationJson withEmbedded(ListConversations200ApplicationJsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonProperty("_links")
    public openapisdk.models.shared.LinksConversationsList links;
    public ListConversations200ApplicationJson withLinks(openapisdk.models.shared.LinksConversationsList links) {
        this.links = links;
        return this;
    }
    @JsonProperty("count")
    public Double count;
    public ListConversations200ApplicationJson withCount(Double count) {
        this.count = count;
        return this;
    }
    @JsonProperty("page_size")
    public Double pageSize;
    public ListConversations200ApplicationJson withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonProperty("record_index")
    public Double recordIndex;
    public ListConversations200ApplicationJson withRecordIndex(Double recordIndex) {
        this.recordIndex = recordIndex;
        return this;
    }
}