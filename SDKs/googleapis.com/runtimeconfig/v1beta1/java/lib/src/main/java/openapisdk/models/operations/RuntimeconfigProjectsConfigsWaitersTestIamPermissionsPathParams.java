package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public RuntimeconfigProjectsConfigsWaitersTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}