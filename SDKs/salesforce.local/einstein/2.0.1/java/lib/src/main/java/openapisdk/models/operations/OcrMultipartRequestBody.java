package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OcrMultipartRequestBody {
    @SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public OcrMultipartRequestBody withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public OcrMultipartRequestBodySampleContent sampleContent;
    public OcrMultipartRequestBody withSampleContent(OcrMultipartRequestBodySampleContent sampleContent) {
        this.sampleContent = sampleContent;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sampleId")
    public String sampleId;
    public OcrMultipartRequestBody withSampleId(String sampleId) {
        this.sampleId = sampleId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sampleLocation")
    public String sampleLocation;
    public OcrMultipartRequestBody withSampleLocation(String sampleLocation) {
        this.sampleLocation = sampleLocation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=task")
    public String task;
    public OcrMultipartRequestBody withTask(String task) {
        this.task = task;
        return this;
    }
}