package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QrCodeRequestBody {
    @SpeakeasyMetadata("form:name=bg-color")
    public String bgColor;
    public QrCodeRequestBody withBgColor(String bgColor) {
        this.bgColor = bgColor;
        return this;
    }
    @SpeakeasyMetadata("form:name=content")
    public String content;
    public QrCodeRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("form:name=fg-color")
    public String fgColor;
    public QrCodeRequestBody withFgColor(String fgColor) {
        this.fgColor = fgColor;
        return this;
    }
    @SpeakeasyMetadata("form:name=height")
    public Integer height;
    public QrCodeRequestBody withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("form:name=width")
    public Integer width;
    public QrCodeRequestBody withWidth(Integer width) {
        this.width = width;
        return this;
    }
}