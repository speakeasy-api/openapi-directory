package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Thumbnail
 * A single thumbnail, with its size and format.
**/
public class Thumbnail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public Thumbnail withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public Thumbnail withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPx")
    public Integer heightPx;
    public Thumbnail withHeightPx(Integer heightPx) {
        this.heightPx = heightPx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPx")
    public Integer widthPx;
    public Thumbnail withWidthPx(Integer widthPx) {
        this.widthPx = widthPx;
        return this;
    }
}