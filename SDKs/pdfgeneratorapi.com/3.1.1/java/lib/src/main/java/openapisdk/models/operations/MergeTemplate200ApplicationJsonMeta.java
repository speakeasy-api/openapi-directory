package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeTemplate200ApplicationJsonMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content-type")
    public String contentType;
    public MergeTemplate200ApplicationJsonMeta withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public MergeTemplate200ApplicationJsonMeta withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
    public String encoding;
    public MergeTemplate200ApplicationJsonMeta withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MergeTemplate200ApplicationJsonMeta withName(String name) {
        this.name = name;
        return this;
    }
}