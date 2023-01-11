package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpriteSheet
 * Sprite sheet configuration.
**/
public class SpriteSheet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnCount")
    public Integer columnCount;
    public SpriteSheet withColumnCount(Integer columnCount) {
        this.columnCount = columnCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeOffset")
    public String endTimeOffset;
    public SpriteSheet withEndTimeOffset(String endTimeOffset) {
        this.endTimeOffset = endTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePrefix")
    public String filePrefix;
    public SpriteSheet withFilePrefix(String filePrefix) {
        this.filePrefix = filePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public SpriteSheet withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public String interval;
    public SpriteSheet withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public Integer quality;
    public SpriteSheet withQuality(Integer quality) {
        this.quality = quality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowCount")
    public Integer rowCount;
    public SpriteSheet withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spriteHeightPixels")
    public Integer spriteHeightPixels;
    public SpriteSheet withSpriteHeightPixels(Integer spriteHeightPixels) {
        this.spriteHeightPixels = spriteHeightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spriteWidthPixels")
    public Integer spriteWidthPixels;
    public SpriteSheet withSpriteWidthPixels(Integer spriteWidthPixels) {
        this.spriteWidthPixels = spriteWidthPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeOffset")
    public String startTimeOffset;
    public SpriteSheet withStartTimeOffset(String startTimeOffset) {
        this.startTimeOffset = startTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public SpriteSheet withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}