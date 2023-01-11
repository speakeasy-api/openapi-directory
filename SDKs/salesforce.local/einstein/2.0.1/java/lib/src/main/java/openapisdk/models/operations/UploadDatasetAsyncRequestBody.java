package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetAsyncRequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public UploadDatasetAsyncRequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UploadDatasetAsyncRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public UploadDatasetAsyncRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public UploadDatasetAsyncRequestBodyTypeEnum type;
    public UploadDatasetAsyncRequestBody withType(UploadDatasetAsyncRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}