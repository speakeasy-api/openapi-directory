package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetAsync2RequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public UpdateDatasetAsync2RequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public UpdateDatasetAsync2RequestBody withPath(String path) {
        this.path = path;
        return this;
    }
}