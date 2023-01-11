package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageResizeRequestBody {
    @SpeakeasyMetadata("form:name=format")
    public String format;
    public ImageResizeRequestBody withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("form:name=height")
    public Integer height;
    public ImageResizeRequestBody withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("form:name=image-url")
    public String imageUrl;
    public ImageResizeRequestBody withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=width")
    public Integer width;
    public ImageResizeRequestBody withWidth(Integer width) {
        this.width = width;
        return this;
    }
}