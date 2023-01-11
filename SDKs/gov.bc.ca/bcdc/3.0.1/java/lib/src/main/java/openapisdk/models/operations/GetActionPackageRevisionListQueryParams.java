package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionPackageRevisionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionPackageRevisionListQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}