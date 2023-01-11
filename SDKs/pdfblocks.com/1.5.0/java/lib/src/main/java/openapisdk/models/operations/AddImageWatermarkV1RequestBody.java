package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddImageWatermarkV1RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public AddImageWatermarkV1RequestBodyFile file;
    public AddImageWatermarkV1RequestBody withFile(AddImageWatermarkV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public AddImageWatermarkV1RequestBodyImage image;
    public AddImageWatermarkV1RequestBody withImage(AddImageWatermarkV1RequestBodyImage image) {
        this.image = image;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=margin")
    public Float margin;
    public AddImageWatermarkV1RequestBody withMargin(Float margin) {
        this.margin = margin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transparency")
    public Integer transparency;
    public AddImageWatermarkV1RequestBody withTransparency(Integer transparency) {
        this.transparency = transparency;
        return this;
    }
}