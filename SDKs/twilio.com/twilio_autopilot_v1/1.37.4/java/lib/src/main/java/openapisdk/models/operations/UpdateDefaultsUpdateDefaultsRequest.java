package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDefaultsUpdateDefaultsRequest {
    @SpeakeasyMetadata("form:name=Defaults")
    public Object defaults;
    public UpdateDefaultsUpdateDefaultsRequest withDefaults(Object defaults) {
        this.defaults = defaults;
        return this;
    }
}