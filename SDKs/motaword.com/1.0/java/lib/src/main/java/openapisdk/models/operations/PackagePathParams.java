package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PackagePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}