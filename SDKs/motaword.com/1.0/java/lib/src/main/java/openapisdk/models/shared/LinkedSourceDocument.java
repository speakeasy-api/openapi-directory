package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinkedSourceDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LinkedSourceDocument withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public LinkedSourceDocument withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public LinkedSourceDocumentSourceEnum source;
    public LinkedSourceDocument withSource(LinkedSourceDocumentSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public LinkedSourceDocument withUrl(String url) {
        this.url = url;
        return this;
    }
}