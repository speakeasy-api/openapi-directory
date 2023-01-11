package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvideFeedback1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public ProvideFeedback1RequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=expectedLabel")
    public String expectedLabel;
    public ProvideFeedback1RequestBody withExpectedLabel(String expectedLabel) {
        this.expectedLabel = expectedLabel;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public ProvideFeedback1RequestBody withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public ProvideFeedback1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
}