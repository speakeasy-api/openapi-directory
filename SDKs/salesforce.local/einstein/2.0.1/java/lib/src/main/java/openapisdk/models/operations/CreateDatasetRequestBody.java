package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetRequestBody {
    @SpeakeasyMetadata("multipartForm:name=labels")
    public String labels;
    public CreateDatasetRequestBody withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public CreateDatasetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public CreateDatasetRequestBodyTypeEnum type;
    public CreateDatasetRequestBody withType(CreateDatasetRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}