package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListLegs200ApplicationJson
 * List Legs Response Payload Object
**/
public class ListLegs200ApplicationJson {
    @JsonProperty("_embedded")
    public ListLegs200ApplicationJsonEmbedded embedded;
    public ListLegs200ApplicationJson withEmbedded(ListLegs200ApplicationJsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonProperty("_links")
    public ListLegs200ApplicationJsonLinks links;
    public ListLegs200ApplicationJson withLinks(ListLegs200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("count")
    public Double count;
    public ListLegs200ApplicationJson withCount(Double count) {
        this.count = count;
        return this;
    }
    @JsonProperty("page_size")
    public Double pageSize;
    public ListLegs200ApplicationJson withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonProperty("record_index")
    public Double recordIndex;
    public ListLegs200ApplicationJson withRecordIndex(Double recordIndex) {
        this.recordIndex = recordIndex;
        return this;
    }
}