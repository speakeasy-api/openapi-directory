package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImageRegion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public ImageRegion withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("height")
    public Float height;
    public ImageRegion withHeight(Float height) {
        this.height = height;
        return this;
    }
    @JsonProperty("left")
    public Float left;
    public ImageRegion withLeft(Float left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionId")
    public String regionId;
    public ImageRegion withRegionId(String regionId) {
        this.regionId = regionId;
        return this;
    }
    @JsonProperty("tagId")
    public String tagId;
    public ImageRegion withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagName")
    public String tagName;
    public ImageRegion withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
    @JsonProperty("top")
    public Float top;
    public ImageRegion withTop(Float top) {
        this.top = top;
        return this;
    }
    @JsonProperty("width")
    public Float width;
    public ImageRegion withWidth(Float width) {
        this.width = width;
        return this;
    }
}