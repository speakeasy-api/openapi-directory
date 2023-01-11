package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Region {
    @JsonProperty("height")
    public Float height;
    public Region withHeight(Float height) {
        this.height = height;
        return this;
    }
    @JsonProperty("left")
    public Float left;
    public Region withLeft(Float left) {
        this.left = left;
        return this;
    }
    @JsonProperty("tagId")
    public String tagId;
    public Region withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @JsonProperty("top")
    public Float top;
    public Region withTop(Float top) {
        this.top = top;
        return this;
    }
    @JsonProperty("width")
    public Float width;
    public Region withWidth(Float width) {
        this.width = width;
        return this;
    }
}