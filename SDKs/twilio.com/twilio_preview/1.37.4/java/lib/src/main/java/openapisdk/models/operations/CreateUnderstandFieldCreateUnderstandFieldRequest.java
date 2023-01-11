package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandFieldCreateUnderstandFieldRequest {
    @SpeakeasyMetadata("form:name=FieldType")
    public String fieldType;
    public CreateUnderstandFieldCreateUnderstandFieldRequest withFieldType(String fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateUnderstandFieldCreateUnderstandFieldRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}