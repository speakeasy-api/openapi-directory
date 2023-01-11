package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddExampleRequestBody {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;
    public AddExampleRequestBody withData(String data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=labelId")
    public Long labelId;
    public AddExampleRequestBody withLabelId(Long labelId) {
        this.labelId = labelId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public AddExampleRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}