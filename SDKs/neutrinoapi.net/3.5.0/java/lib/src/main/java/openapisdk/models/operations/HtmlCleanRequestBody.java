package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HtmlCleanRequestBody {
    @SpeakeasyMetadata("form:name=content")
    public String content;
    public HtmlCleanRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-type")
    public String outputType;
    public HtmlCleanRequestBody withOutputType(String outputType) {
        this.outputType = outputType;
        return this;
    }
}