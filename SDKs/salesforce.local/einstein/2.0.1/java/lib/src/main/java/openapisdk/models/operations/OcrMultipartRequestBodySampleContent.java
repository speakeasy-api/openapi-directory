package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OcrMultipartRequestBodySampleContent {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public OcrMultipartRequestBodySampleContent withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sampleContent")
    public String sampleContent;
    public OcrMultipartRequestBodySampleContent withSampleContent(String sampleContent) {
        this.sampleContent = sampleContent;
        return this;
    }
}