package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetSync1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public UploadDatasetSync1RequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UploadDatasetSync1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public UploadDatasetSync1RequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public UploadDatasetSync1RequestBodyTypeEnum type;
    public UploadDatasetSync1RequestBody withType(UploadDatasetSync1RequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}