package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetAsyncRequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public UpdateDatasetAsyncRequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public UpdateDatasetAsyncRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}