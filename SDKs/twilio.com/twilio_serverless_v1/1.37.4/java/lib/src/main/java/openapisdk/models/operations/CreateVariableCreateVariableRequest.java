package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVariableCreateVariableRequest {
    @SpeakeasyMetadata("form:name=Key")
    public String key;
    public CreateVariableCreateVariableRequest withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("form:name=Value")
    public String value;
    public CreateVariableCreateVariableRequest withValue(String value) {
        this.value = value;
        return this;
    }
}