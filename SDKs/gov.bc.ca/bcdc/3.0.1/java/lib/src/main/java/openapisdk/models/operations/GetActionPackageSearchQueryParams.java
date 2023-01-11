package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionPackageSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetActionPackageSearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}