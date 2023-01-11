package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVariableUpdateVariableRequest {
    @SpeakeasyMetadata("form:name=Key")
    public String key;
    public UpdateVariableUpdateVariableRequest withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("form:name=Value")
    public String value;
    public UpdateVariableUpdateVariableRequest withValue(String value) {
        this.value = value;
        return this;
    }
}