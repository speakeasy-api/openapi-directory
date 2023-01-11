package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetAsync1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public UpdateDatasetAsync1RequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public UpdateDatasetAsync1RequestBody withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}