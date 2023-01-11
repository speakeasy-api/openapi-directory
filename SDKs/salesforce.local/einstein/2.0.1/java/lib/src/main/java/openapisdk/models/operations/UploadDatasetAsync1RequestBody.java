package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetAsync1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public UploadDatasetAsync1RequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UploadDatasetAsync1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public UploadDatasetAsync1RequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public UploadDatasetAsync1RequestBodyTypeEnum type;
    public UploadDatasetAsync1RequestBody withType(UploadDatasetAsync1RequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}