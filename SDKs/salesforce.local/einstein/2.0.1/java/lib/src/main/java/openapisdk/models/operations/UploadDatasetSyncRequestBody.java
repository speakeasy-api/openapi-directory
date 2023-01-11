package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetSyncRequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public UploadDatasetSyncRequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UploadDatasetSyncRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public UploadDatasetSyncRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public UploadDatasetSyncRequestBodyTypeEnum type;
    public UploadDatasetSyncRequestBody withType(UploadDatasetSyncRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}