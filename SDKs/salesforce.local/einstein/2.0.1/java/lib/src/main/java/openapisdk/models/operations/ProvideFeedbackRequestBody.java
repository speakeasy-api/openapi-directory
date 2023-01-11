package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvideFeedbackRequestBody {
    @SpeakeasyMetadata("multipartForm:name=document")
    public String document;
    public ProvideFeedbackRequestBody withDocument(String document) {
        this.document = document;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=expectedLabel")
    public String expectedLabel;
    public ProvideFeedbackRequestBody withExpectedLabel(String expectedLabel) {
        this.expectedLabel = expectedLabel;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public ProvideFeedbackRequestBody withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public ProvideFeedbackRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}