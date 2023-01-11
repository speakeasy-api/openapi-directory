package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTextWatermarkV1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=color")
    public AddTextWatermarkV1RequestBodyColorEnum color;
    public AddTextWatermarkV1RequestBody withColor(AddTextWatermarkV1RequestBodyColorEnum color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public AddTextWatermarkV1RequestBodyFile file;
    public AddTextWatermarkV1RequestBody withFile(AddTextWatermarkV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=line_1")
    public String line1;
    public AddTextWatermarkV1RequestBody withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=line_2")
    public String line2;
    public AddTextWatermarkV1RequestBody withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=line_3")
    public String line3;
    public AddTextWatermarkV1RequestBody withLine3(String line3) {
        this.line3 = line3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=margin")
    public Float margin;
    public AddTextWatermarkV1RequestBody withMargin(Float margin) {
        this.margin = margin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=template")
    public Integer template;
    public AddTextWatermarkV1RequestBody withTemplate(Integer template) {
        this.template = template;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transparency")
    public Integer transparency;
    public AddTextWatermarkV1RequestBody withTransparency(Integer transparency) {
        this.transparency = transparency;
        return this;
    }
}