package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudkmsProjectsLocationsKeyRingsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}