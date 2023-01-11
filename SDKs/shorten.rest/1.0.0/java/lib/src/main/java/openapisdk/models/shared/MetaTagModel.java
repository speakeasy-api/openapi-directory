package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MetaTagModel {
    @JsonProperty("content")
    public String content;
    public MetaTagModel withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public MetaTagModel withName(String name) {
        this.name = name;
        return this;
    }
}