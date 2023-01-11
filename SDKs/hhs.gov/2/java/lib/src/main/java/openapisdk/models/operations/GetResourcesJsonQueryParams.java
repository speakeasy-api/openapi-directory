package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=q")
    public String q;
    public GetResourcesJsonQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}