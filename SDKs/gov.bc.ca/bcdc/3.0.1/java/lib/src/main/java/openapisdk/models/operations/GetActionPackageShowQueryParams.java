package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionPackageShowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionPackageShowQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}