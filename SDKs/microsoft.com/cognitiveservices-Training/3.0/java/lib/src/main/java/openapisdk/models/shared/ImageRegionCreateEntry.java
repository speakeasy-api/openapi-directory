package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImageRegionCreateEntry
 * Entry associating a region to an image.
**/
public class ImageRegionCreateEntry {
    @JsonProperty("height")
    public Float height;
    public ImageRegionCreateEntry withHeight(Float height) {
        this.height = height;
        return this;
    }
    @JsonProperty("imageId")
    public String imageId;
    public ImageRegionCreateEntry withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonProperty("left")
    public Float left;
    public ImageRegionCreateEntry withLeft(Float left) {
        this.left = left;
        return this;
    }
    @JsonProperty("tagId")
    public String tagId;
    public ImageRegionCreateEntry withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @JsonProperty("top")
    public Float top;
    public ImageRegionCreateEntry withTop(Float top) {
        this.top = top;
        return this;
    }
    @JsonProperty("width")
    public Float width;
    public ImageRegionCreateEntry withWidth(Float width) {
        this.width = width;
        return this;
    }
}