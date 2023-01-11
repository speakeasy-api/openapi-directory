package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageWatermarkRequestBody {
    @SpeakeasyMetadata("form:name=format")
    public String format;
    public ImageWatermarkRequestBody withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("form:name=height")
    public Integer height;
    public ImageWatermarkRequestBody withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("form:name=image-url")
    public String imageUrl;
    public ImageWatermarkRequestBody withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=opacity")
    public Integer opacity;
    public ImageWatermarkRequestBody withOpacity(Integer opacity) {
        this.opacity = opacity;
        return this;
    }
    @SpeakeasyMetadata("form:name=position")
    public String position;
    public ImageWatermarkRequestBody withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("form:name=watermark-url")
    public String watermarkUrl;
    public ImageWatermarkRequestBody withWatermarkUrl(String watermarkUrl) {
        this.watermarkUrl = watermarkUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=width")
    public Integer width;
    public ImageWatermarkRequestBody withWidth(Integer width) {
        this.width = width;
        return this;
    }
}