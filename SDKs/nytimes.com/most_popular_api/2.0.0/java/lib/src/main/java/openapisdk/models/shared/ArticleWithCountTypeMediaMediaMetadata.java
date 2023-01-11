package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleWithCountTypeMediaMediaMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public ArticleWithCountTypeMediaMediaMetadata withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public ArticleWithCountTypeMediaMediaMetadata withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ArticleWithCountTypeMediaMediaMetadata withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public ArticleWithCountTypeMediaMediaMetadata withWidth(Long width) {
        this.width = width;
        return this;
    }
}