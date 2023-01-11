package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageSizeDetails
 * Image size information
**/
public class ImageSizeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public ImageSizeDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dpi")
    public Long dpi;
    public ImageSizeDetails withDpi(Long dpi) {
        this.dpi = dpi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Long fileSize;
    public ImageSizeDetails withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public ImageSizeDetails withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public ImageSizeDetails withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_licensable")
    public Boolean isLicensable;
    public ImageSizeDetails withIsLicensable(Boolean isLicensable) {
        this.isLicensable = isLicensable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public ImageSizeDetails withWidth(Long width) {
        this.width = width;
        return this;
    }
}