package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldCreateFieldRequest {
    @SpeakeasyMetadata("form:name=FieldType")
    public String fieldType;
    public CreateFieldCreateFieldRequest withFieldType(String fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateFieldCreateFieldRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}