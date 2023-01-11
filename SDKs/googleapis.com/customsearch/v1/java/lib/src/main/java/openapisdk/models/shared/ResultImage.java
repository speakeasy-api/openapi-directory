package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultImage
 * Image belonging to a custom search result.
**/
public class ResultImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byteSize")
    public Integer byteSize;
    public ResultImage withByteSize(Integer byteSize) {
        this.byteSize = byteSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextLink")
    public String contextLink;
    public ResultImage withContextLink(String contextLink) {
        this.contextLink = contextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public ResultImage withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailHeight")
    public Integer thumbnailHeight;
    public ResultImage withThumbnailHeight(Integer thumbnailHeight) {
        this.thumbnailHeight = thumbnailHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailLink")
    public String thumbnailLink;
    public ResultImage withThumbnailLink(String thumbnailLink) {
        this.thumbnailLink = thumbnailLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailWidth")
    public Integer thumbnailWidth;
    public ResultImage withThumbnailWidth(Integer thumbnailWidth) {
        this.thumbnailWidth = thumbnailWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public ResultImage withWidth(Integer width) {
        this.width = width;
        return this;
    }
}